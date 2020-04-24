<template>
  <div class="preview">
    Loading preview...
  </div>
</template>

<script>
export default {
  name: 'Preview',
  asyncData({ $prismic, query }) {
    const previewToken = query.token
    $prismic.api
      .getPreviewResolver(previewToken, $prismic.linkResolver, '/')
      .then((url) => {
        window.location.replace(url)
      })
  }
}
</script>
