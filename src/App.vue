<template>
  <div id="app">
    <main class="main">
      <MainContainer @add-number="addNumber" />
      <section class="action">
        <div v-if="!tsAllNumbers.includes(inputNumber)" class="free">
          <h3 class="action-title number-is-free">Номер свободен</h3>
          <div class="action-content-wrapper">
            <div v-if="hasNumber" class="action-content">
                <button class="action-btn action-remove">Удалить</button>
                <span  class=" action-text">На вашем ТС уже есть номер</span>
                <button class="action-btn action-cancel">Снять</button>
            </div>
            <div v-else class="action-content">
                <button class="action-btn action-remove">Отмена</button>
                <span class="action-text">Стоимость снятия 15 000$</span>
                <button class="action-btn action-cancel">Снять</button>
            </div>
          </div>
        </div>
        <div v-else class="busy">
          <h3 class="action-title number-is-busy">Номер занят</h3>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer';
export default {
  name: 'App',
  data() {
    return {
      hasNumber:true,
      tsNumbers:true,
      tsAllNumbers:[1,2,3],
      inputNumber:'',
    }
  },
  components: {
    MainContainer
  },
  methods: {
    addNumber(number) {
      this.inputNumber = +number
    }
  }
}
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  position: relative;
  height: 100vh;
  background-image: url("./assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}


.action-title {
  text-align: center;
  padding: 13px 0;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.8) 50%,
    transparent 100%
  );
  position: relative;
}
.action-title::after,
.action-title::before {
  content: "";
  position: absolute;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 2px;
}
.number-is-free::after,
.number-is-free::before {
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 0) 50%,
    transparent 100%
  );
}
.number-is-busy::after,
.number-is-busy::before {
  background: linear-gradient(
    to right,
    transparent 0%,
    #ff0000 50%,
    transparent 100%
  );
}
.action-title::after {
  top: 0;
}
.action-title::before {
  bottom: 0;
}

.action-content {
  width: 700px;
  height: 110px;
  background-color: #191919;
  border-radius: 10px;
  display: flex;
  z-index: 11;
  align-items: center;
  justify-content: space-between;
}
.action-content-wrapper {
  width: 730px;
  height: 140px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
}
.action-text {
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
}
.action-btn {
  padding: 14px 28px;
  background-color: #191919;
  border-radius: 10px;
  font-size: 19px;
  cursor: pointer;
  width: 135px;
  font-weight: 600;
}
.action-btn:focus {
  outline: none;
}
.action-remove {
  margin-left: 34px;
  border: 0.5px solid rgba(214, 157, 0, 0.2);
  color: #fff;
  position: relative;
  box-shadow: -3px -3px 3px rgba(255, 255, 255, 0.1),
    2px 2px 2px rgba(0, 0, 0, 0.5);
}
.action-remove:hover {
  color: #d66b00;
  font-size: 17px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
}
.action-remove:hover::after {
  content: "";
  position: absolute;
  left: -32px;
  top: -1px;
  z-index: -1;
  width: 42px;
  height: 50px;
  background: linear-gradient(to right, transparent, #d66b00);
}
.action-cancel {
  margin-right: 34px;
  border: 0.5px solid rgba(53, 53, 53, 0.1);
  color: #fff;
  position: relative;
  box-shadow: -3px -3px 3px rgba(255, 255, 255, 0.1),
    2px 2px 2px rgba(0, 0, 0, 0.5);
}
.action-cancel:hover {
  color: #fff;
  font-size: 17px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
}
.action-cancel:hover::after {
  content: "";
  position: absolute;
  right: -32px;
  top: -1px;
  z-index: -1;
  width: 42px;
  height: 51px;
  background: linear-gradient(to left, transparent, #fff);
}

</style>
