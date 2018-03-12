/* eslint no-param-reassign: ["error", { "props": false }] */

const get = (p, o) => p.reduce((xs, x) => (xs && !isBlank(xs[x]) ? xs[x] : null), o);

const isBlank = str => (!str && str !== 0) || (typeof str === 'string' && str.trim().length === 0);

const simpleLookup = (path, data) => get(path.split('.'), data);

const transformValue = (value, transform) => {
  switch (transform.type) {
    case 'replace':
      return transform.map[value] ? transform.map[value] : value;
    case 'lowercase':
      return value.toLowerCase();
    case 'regex': {
      const pattern = RegExp(transform.pattern, 'g');
      return value.replace(pattern, transform.replaceWith);
    }
    default:
      return value;
  }
};

const processBranchOfDataLayer = (node, datalayer) =>
  Object.keys(node).reduce((obj, mappingKey) => {
    const mappingValue = node[mappingKey];

    if (typeof mappingValue === 'string') {
      obj[mappingKey] = simpleLookup(mappingValue, datalayer);
    } else if (typeof mappingValue === 'object') {
      const originalValue = simpleLookup(mappingValue.sourceValue, datalayer);
      if (mappingValue.transforms && originalValue) {
        obj[mappingKey] = mappingValue.transforms.reduce(transformValue, originalValue);
      } else {
        obj[mappingKey] = originalValue;
      }
    }

    if (isBlank(obj[mappingKey])) {
      if (mappingValue.defaultValue) {
        obj[mappingKey] = mappingValue.defaultValue;
      } else {
        delete obj[mappingKey];
      }
    }

    return obj;
  }, {});

const processTreeBranches = (targetingMapping, treeBranches, datalayer) =>
  treeBranches.reduce((obj, branch) => {
    const mappedBranch = processBranchOfDataLayer(
      targetingMapping.dataLayerSchemaMappings[branch],
      datalayer,
    );
    return {
      ...obj,
      ...mappedBranch,
    };
  }, {});

const generateCoreTargeting = (targetingMapping, datalayer) =>
  processTreeBranches(targetingMapping, targetingMapping.core.requiredMappings, datalayer);

const generatePageTargeting = (targetingMapping, appName, pageId, datalayer) =>
  processTreeBranches(
    targetingMapping,
    targetingMapping.systems[appName][pageId].requiredMappings,
    datalayer,
  );

const pageId = coreTargeting =>
  `${coreTargeting.site}:${coreTargeting.channel}:${coreTargeting.sect}`;

function generateTargeting(appName, advertTargetingMapping, datalayer) {
  const coreTargeting = generateCoreTargeting(advertTargetingMapping, datalayer);
  const pageTargeting = generatePageTargeting(
    advertTargetingMapping,
    appName,
    pageId(coreTargeting),
    datalayer,
  );

  return {
    ...coreTargeting,
    ...pageTargeting,
  };
}

export default generateTargeting;
