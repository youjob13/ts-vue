<template>
    <div class="order">
        <h3 class="ts-number-title">Введите номер</h3>
        <div class="ts-number-content">
          <input  maxlength="7" v-on:input="onSubmit" type="text" v-model="number">
           
        </div>
    </div>
</template>

<script>
export default {
  props: ['input'],
  data() {
    return {
      number:null
    }
  },
  methods: {
    onSubmit() {
      this.$emit('add-number', this.number);
    }
  }
}
</script>

<style lang="scss" scoped>
$char-w: 1.2ch;
$gap:1.8ch;
$n-char: 7;
$in-w: $n-char*($char-w + $gap);
input {
  text-transform: uppercase;
  color: #fff;
	display: block;
	border: none;
	padding: 0;
	width: $in-w;
	background: repeating-linear-gradient(90deg, dimgrey 0, dimgrey 20px, transparent 0, transparent $char-w + $gap) 0 100%/ #{$in-w - $gap} 2px no-repeat;
  font-size:2ch;
  letter-spacing: 2ch;
  vertical-align:sub;
	&:focus {
		outline: none;
	}
}
.ts-number-title {
  color: rgba(255, 255, 255, 0.5);
}
.ts-number-num,
.ts-number-num_first {
  font-size: 20px;
  margin-right: 20px;
  font-weight: 600;
  color: #fff;
  border-bottom: 0.5px solid #707070;
}
.ts-number-num_first {
  margin-right: 30px;
}
.ts-number-num:nth-child(5) {
  margin-right: 8px;
}
.order {
  line-height: 0.5;
}
</style>