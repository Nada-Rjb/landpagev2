<template>
  <header class="site-header">
    <!-- TO DO: overwrite padding -->
    <div style="margin-inline: 2rem" data-width="wide">
      <div class="site-header__inner">
        <img
          src="@/assets/imges/elfateh.jpg"
          alt="El Fateh"
          style="max-inline-size: 60px"
        />
        <button area-control="primary-navigation" area-expanded="false">
          <span class="visually-hidden">Menue</span>
          <img src="@/assets/imges/hamburger.svg" alt="menue" />
        </button>
        <nav id="primary-navigation" class="primary-nav">
          <ul role="list">
            <li><a href="/">الرئيسية</a></li>
            <li><a href="/product-guide.html">الخدمات</a></li>
            <li><a href="/product-guide.html#faq">من نحن </a></li>
            <li><a href="/index.html#footer">اتصل بنا</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  //   methods: {
  //     toggleMenu() {
  //       this.drawer = !this.drawer;
  //     },
  //   },
};
</script>
