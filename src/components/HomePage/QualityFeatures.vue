<template>
  <section class="section text-center">
    <div class="wrapper benefits" data-width="narrow">
      <div class="benfit">
        <div class="icon">
          <img src="../../assets/imges/delivery-icon n.png" />
        </div>
        <h3>توصيل سريع ومجاني</h3>
        <p>توصيل مجاني لجميع الطلبات</p>
      </div>
      <div class="benfit">
        <div class="icon">
          <img src="../../assets/imges/customer-service.png" />
        </div>
        <h3>خدمة عملاء 24/7</h3>
        <p>دعم عملاء متاح على مدار الساعة</p>
      </div>
      <div class="benfit">
        <div class="icon">
          <img src="../../assets/imges/money-back.png" />
        </div>
        <h3>ضمان استرجاع الأموال</h3>
        <p>نقوم بإرجاع الأموال خلال 30 يومًا</p>
      </div>
    </div>
  </section>
</template>
<style>
.benefits {
  display: flex;
  justify-content: space-around;
  text-align: center;
  color: green;
}
.benfit {
  max-width: 300px;
}
.icon {
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
  color: var(--clr-green-600);
}
.icon img {
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 50%;
}
</style>
