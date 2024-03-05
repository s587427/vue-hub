<template>
    <div>
        <h2>Post</h2>

        <ul>
            <router-link :to="`/home/post?search=abc&id=2`">pass query test</router-link>
            <li v-for="(post, index) in posts">
                <!-- 動態傳參params -->
                <router-link :to="`/home/post/${post.id}`">{{ post.title }}</router-link>
            </li>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "PostList",
    data() {
        return {
            posts: [
                { id: 1, title: "one", desc: "Lorem ipsum dolor" },
                { id: 2, title: "second", desc: "adipisicing ipsum dolor" },
                { id: 3, title: "one", desc: "reiciendis ipsum dolor" },
                { id: 4, title: "second", desc: "commodi ipsum dolor" },
            ],
        }
    },
}
</script>
