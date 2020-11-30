<template>
      <div class="container-wrapper">
        <div class="container">
          <header class="header">
            <h1 class="title">Регистрация ТС</h1>
            <button class="close"></button>
          </header>
          <div class="select-block">
            <section class="service-select">
              <div v-bind:class='[isOrder ? null : activeClassRegistration]' v-on:click="isOrder=false" class="registration-number">
                <h2 class="registration-number-title">Регистрация номера</h2>
              </div>
              <div v-bind:class='[isOrder ? activeClassOrder : null]'  v-on:click="isOrder=true" class="order-number">
                <h2 class="order-number-title">Номер на заказ</h2>
              </div>
            </section>
            <section class="select-country">
              <h2 class="country-title">Выберите страну</h2>
              <div class="country-list" >
                <div 
                class="country-item" 
                v-bind:class="[(countryActive === item) ? activeClassCountry : null]" 
                v-for="item of country"
                v-on:click="countryActive=item"
                >
                  <span>{{item}}</span>
                </div>
              </div>
            </section>
          </div>
          <section class="ts-number">
            <div class="ts-number-data">
              <TsNumberOrder v-bind:val='input' @add-number="addNumber" v-if="isOrder"/>
              <TsNumberRegistration v-else/>
            </div>
            <div class="ts-number-price">
              <span class="ts-number-price-num">1 000 000$</span>
              <img
              v-if="isOrder"
                class="ts-number-price-img cart-order"
                src="../assets/cartOrder.svg"
              />
              <img
              v-else
                class="ts-number-price-img cart-registration"
                src="../assets/cartRegistration.svg"
              />
            </div>
          </section>
        </div>
        <!-- <div class="container">
          <div class="available-variables">
            <span v-on:click="input=item" v-for="item of letter[countryActive]">{{item}}</span>
            <br />
            <span v-for="i of 9">{{i}}</span>
            <span>0</span>
          </div>
        </div> -->
      </div>
</template>

<script>
import TsNumberOrder from '@/components/TsNumberOrder.vue';
import TsNumberRegistration from '@/components/TsNumberRegistration.vue';
export default {
  data() {
    return {
        isOrder:true,
        country: ['RUS', 'AZ', 'KZ', 'UA', 'GE'],
        countryActive: '',
        activeClassCountry: "country-item_active",
        activeClassOrder: "order-number-active",
        activeClassRegistration: "registration-number-active",
        letter: {
          RUS: ['A', 'B', 'E', 'K', 'M', 'H', 'O', 'P', 'C', 'T', 'Y', 'X'],
          UA:['A',"B","C",'E',"H","I","K","M","O","P","T","X"],
          AZ:['E', 'R', 'T', 'Y', 'U', 'O', 'P', 'A', 'S', 'D' ,'F', 'G' ,'H' ,'J', 'K' ,'L' ,'Z' ,'X' ,'C' ,'V' ,'B' ,'N', 'M'],
          KZ:['E', 'R', 'T', 'Y', 'U', 'O', 'P', 'A', 'S', 'D', 'F', 'H', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'G', 'J', 'Q', 'I'],
          GE:['A',"B","C","D",'E',"F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        },
        input:''
    }
  },
  updated() {
    console.log(this.input);
  },
  components: {
    TsNumberRegistration,
    TsNumberOrder
  },
  methods: {
    addNumber(number) {
      this.$emit('add-number',number)
    }
  },
}
</script>

<style lang="scss" scoped>
.available-variables {
  color:#fff;
  text-align: center;
  font-weight: 600;
  padding: 25px;
  font-size: 29px;
  line-height: 1.5;
  word-break:break-all;
  span {
    letter-spacing: 33px;
  }
}
.container-wrapper {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
}
.container {
  width: 700px;
  height: 390px;
  margin:20px;
  background-color: #191919;
  border-radius: 10px;
  z-index: 11;
}
.header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 35px #000, 0 5px 40px #000;
  z-index: 1;
}
.title {
  font-weight: 600;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.5);
  padding: 12px 34px;
}
.close {
  font-size: 30px;
  border: none;
  font-weight: 900;
  background: rgba(255, 255, 255, 0.5);
  width: 25px;
  height: 25px;
  border-radius: 3px;
  margin: 15px 15px 0 0;
  position: relative;
  cursor: pointer;
}
.close:focus {
  outline: none;
}
.close::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateZ(45deg);
  z-index: 1;
  width: 4px;
  height: 15px;
  background-color: #000;
}
.close::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateZ(-45deg);
  z-index: 1;
  width: 4px;
  height: 15px;
  background-color: #000;
}
.select-block {
  display: flex;
}
.registration-number,
.order-number {
  cursor: pointer;
  margin: 46px 35px 0 35px;
  text-align: center;
  padding: 14px 33px;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: -3px -3px 3px rgba(129, 129, 129, 0.1),
    3px 3px 4px rgba(0, 0, 0, 0.3);
}
.order-number {
  margin-top: 24px;
}
.order-number-title {
  color: #d6ca00;
}
.registration-number-title {
  color: #fff;
}
.registration-number-title,
.order-number-title {
  font-size: 19px;
  font-weight: 600;
}

.registration-number:hover::after,
.order-number:hover::after,
.order-number-active.order-number::after,
.registration-number-active.registration-number::after {
  content: "";
  position: absolute;
  left: -32px;
  top: 0;
  z-index: -1;
  width: 42px;
  height: 51px;
}

.registration-number,
.order-number {
  position: relative;
  background-color: #191919;
  border: 0.5px solid rgba(255, 255, 0, 0.2);
}
.registration-number {
  border: 0.5px solid rgba(255, 255, 255, 0.6);
}
.registration-number::after {
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6));
}
.order-number::after {
  background: linear-gradient(to right, transparent, rgba(214, 202, 0, 0.6));
}




.select-country {
  margin: 34px 20px 0 0;
  padding-bottom: 34px;
  border: 0.5px solid rgba(255, 255, 0, 0.2);
  width: 323px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  border-bottom: none;
}

.country-title {
  padding: 27px 0 0 20px;
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
}
.country-list:before {
  content: "";
  position: absolute;
  left: 0;
  top: -30px;
  width: 100%;
  height: 2px;
  background: #d6ca00;
  background: linear-gradient(
    to right,
    transparent 0%,
    #d6ca00 50%,
    transparent 100%
  );
}
.country-list:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -34px;
  width: 100%;
  height: 2px;
  background: #d6ca00;
  background: linear-gradient(
    to right,
    transparent 0%,
    #d6ca00 50%,
    transparent 100%
  );
}
.country-list {
  display: flex;
  position: relative;
  margin-top: 36px;
  margin-left: 5px;
}
.country-item {
  margin: 4px 0;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 17px;
  width: 46px;
  height: 46px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-right: 12px;
}
.country-item:last-child {
  margin-right: 0;
}
.country-item_active,
.country-item:hover {
  border: 2px solid #d6ca00;
  color: #fff;
  margin: 3px 10px 0 0;
}
.ts-number {
  display: flex;
  justify-content: space-between;
  margin: 0 24px 34px 34px;
  border: 0.5px solid rgba(255, 255, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.4);
  border-top: none;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  padding: 23.5px 27px;
  position: relative;
}
.ts-number::after {
  content: "";
  position: absolute;
  height: 0.5px;
  top: 0;
  left: 7px;
  width: 310.5px;
  background: rgba(255, 255, 0, 0.2);
}
.ts-number-title {
  color: rgba(255, 255, 255, 0.5);
}

.ts-number-price {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ts-number-price-num {
  text-shadow: 0px 0px 4px rgba(255, 255, 0, 0.6);
  padding: 12px 48px;
  background-color: #000;
  border-radius: 5px;
  margin-right: 15px;
}
.ts-number-price-img {
  border: 0.5px solid rgba(255, 255, 0, 0.6);
  cursor: pointer;
  background-color: #191919;
  border-radius: 6px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5),
    -3px -3px 3px rgba(99, 99, 99, 0.3);
}
.ts-number-price-img:hover {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  margin-left: 8.1px;
  margin-top: 7.5px;
  width: 50px;
  height: auto;
}
.cart-order {
  border: 0.5px solid rgba(255, 255, 0, 0.4);
}
.cart-registration {
  border: 0.5px solid rgba(255, 255, 255, 0.2);
}
</style>