import { ref } from "vue";


const getArticles = () -> {
    const articles = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/articles')
            if (!data.ok) {
                throw Error('Articles doesnt exists')
            }

            articles.value = await data.json()
        } 
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { articles, error, load }
}

export default getArticles