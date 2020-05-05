<template>
    <div class="vote-container">
        <h3 class="vote-title">Try it!</h3>
        <div class="vote-content">
            <div class="vote-content__button" v-on:click="addVote">Vote</div>
            <div class="vote-content__result">{{votes}} votes</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Vote',
        data: () => ({
            votes: 0
        }),
        created: async function() {
          const result = await fetch("http://0.0.0.0:8081/votes/1").then(res => res.json());
          this.votes = result.vote;
        },
        methods: {
            async addVote() {
                await fetch("http://0.0.0.0:8081/votes/add",
                    {
                        method: 'POST'
                    });
                const result = await fetch("http://0.0.0.0:8081/votes/1").then(res => res.json());
                this.votes = result.vote;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .vote-container {
        width: 100%;
        height: 100vh;
        background: rgb(219, 112, 147);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .vote-title {
        margin: 1rem 0;
        font-size: 2rem;
        color: white;
    }

    .vote-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .vote-content__button {
        border: 5px solid #FF8C00;
        border-radius: 10px;
        height: 50px;
        width: 200px;
        margin: 1rem 0;
        font-size: 2rem;
        font-weight: 800;
        font-family: monospace;
        color: #FF8C00;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 3px 3px #B35D79;
    }

    .vote-content__button:active {
        background: white;
        border: 5px solid #bb6a07;
        box-shadow: 6px 3px #B35D79;
    }

    .vote-content__result {
        height: 200px;
        width: 500px;
        border: 5px dashed #FF8C00;
        border-radius: 10px;
        font-size: 2rem;
        font-weight: 800;
        font-family: monospace;
        color: #FF8C00;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: twinkle 1s alternate infinite;
    }

    @keyframes twinkle {
        from {
            border: 5px dashed #FF8C00;
        }
        to {
            border: 5px dashed #4169E1;
        }
    }
</style>
