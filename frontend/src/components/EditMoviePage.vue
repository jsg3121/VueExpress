<template>
    <form action="post" @submit.stop.prevent="editSubmit">
        <div>
            <label for="name">영화 제목</label>
            <input type="text" name="name" required v-model="movie.name">
        </div>
        <div>
            <label for="year">개봉년도</label>
            <input type="number" name="year" required v-model="movie.year">
        </div>
        <div>
            <label for="director">영화 감독</label>
            <input type="text" name="director" required v-model="movie.director">
        </div>
        <div>
            <label for="poster">포스터 링크</label>
            <input type="url" name="poster" required v-model="movie.poster">
        </div>
        <div>
            <label for="description">설명</label>
            <input type="text" name="description" required v-model="movie.description">
        </div>
        <div>
            <button type="submit">수정하기</button>
        </div>
    </form>
</template>

<script>
export default {
    created() {
        let id = this.$route.params.id;
        this.$http.get(`/movies/${id}`).then(response => {
            this.movie = response.data[0];
            this.movie.id = id;
        });
    },
     methods: {
        editSubmit() {
            this.$http.post("/movies/edit", this.movie)
                .then(res => {
                    console.log('edit success!');
                })
                .catch(err => {
                    console.error('edit fail!');
                });
            this.$router.push({name: "movielist" });
        }
    },
    data() {
         return {
            movie: {
                id: "",
                name: "",
                year: 0,
                director: "",
                poster: "",
                description:""
            },
            response:""
        };
    }
}
</script>

<style>

</style>