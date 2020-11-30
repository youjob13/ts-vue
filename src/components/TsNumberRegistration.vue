<template>
    <div class="registration">
        <h3 class="ts-number-title">Выберите регион</h3>
        <div class="ts-number-content">
            <input class="region" type="text" v-model="region" />
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      region: 77
    }
  },
  updated() {
    console.log(this.region);
  }
}
</script>

<style scoped>
.ts-number-title {
  color: rgba(255, 255, 255, 0.5);
}
.registration {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
}
.region {
  height: 46px;
  width: 76px;
  text-align: center;
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  border-radius: 5px;
  margin-left: 32px;
}
.region:focus {
  outline: none;
}

</style>