<template>
<div class="container" style=" background-color: rgb(94, 94, 94);">
    <form class="vue-form" @submit.prevent="submit" style="background-color:  rgb(170, 170, 170)">

  <div class="error-message">
    <p v-show="!email.valid">Lütfen Geçerli Bir Mail Adresi Giriniz.</p>
  </div>

  <fieldset>
    <legend>GİRİŞ YAP</legend>
   
    <div>
      <label class="label" for="email">Email</label>
      <input type="email" placeholder="tugcenurozkan@gmail.com"  name="email" id="email" required=""
             :class="{ email , error: !email.valid }"
             v-model="email.value" style="background-color: rgb(199, 199, 199)">
    </div>

    <div >
    <label class="label" for="parola">Parola</label>
        <input type="password" placeholder="Parola Giriniz" id="parola" class="form-control" v-model="parola" style="background-color: rgb(199, 199, 199)">
            
</div>

    <div>
      <input type="submit" value="Giriş yap" @click="submit">
    </div>
  </fieldset>
</form>

<div class="debug">
  <pre><code>{{ $data }}</code></pre>
</div>

</div>
</template>

<script>
export default {
    
data: function() {
  return {
    parola:"",
    email: {
      value: "",
      valid: true
    },
    features: ["Reactivity", "Encapsulation", "Data Binding"],
    selection: {
      member: "0",
      framework: "vue",
      features: []
    },
   
    submitted: false
  };
},
methods: {
  // submit form handler
  submit: function() {
    this.submitted = true,
    alert('Giriş İşleminiz Gerçekleşmiştir.')
  },
  // validate by type and value
  validate: function(type, value) {
    if (type === "email") {
      this.email.valid = this.isEmail(value) ? true : false;
    }
  },
 
  // check or uncheck all
  checkAll: function(event) {
    this.selection.features = event.target.checked ? this.features : [];
  }
},
watch: {
  // watching nested property
  "email.value": function(value) {
    this.validate("email", value);
  }
}
}
</script>