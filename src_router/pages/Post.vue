<template>
    <div>
        <div>Post by params: {{ id }}</div>
        <div>Post by query string: {{ $route.query.search }}, {{ $route.query.id }}</div>
        {{ data1 }}
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["id", "search", "data1"],
}
</script>
