<template>
<body>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<h2 style = "text-align: center">Empresa de Open Source</h2>
<div class="container">
  <form action="/action_page.php">
    <div class="row">
      <h2 style="text-align:center">Ingresa con tu usuario o Redes Sociales</h2>
      <div class="vl">
        <span class="vl-innertext"></span>
      </div>

      <div class="col">
        <a href="https://www.facebook.com" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Ingresa con Facebook
         </a>
        <a href="https://www.twitter.com" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Ingresa con Twitter
        </a>
        <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&passive=1209600&osid=1&continue=https%3A%2F%2Fmyaccount.google.com%2Fintro%3Futm_source%3DOGB%26utm_medium%3Dapp&followup=https%3A%2F%2Fmyaccount.google.com%2Fintro%3Futm_source%3DOGB%26utm_medium%3Dapp&csig=AF-SEnasFs9KVc6k8PwB%3A1545373146&flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="google btn"><i class="fa fa-google fa-fw">
          </i> Ingresa con Google+
        </a>
      </div>

      <div class="col">
        <div class="hide-md-lg">
          <p>Ingresa con tu usuario:</p>
        </div>

        <el-input type="text" name="username" placeholder="Usuario"></el-input>
        <el-input type="password" name="password" placeholder="Contraseña"></el-input>
        <el-button @click="go" type=success>Iniciar Sesión</el-button>
        <el-button type="text" @click="open3">¿Olvidaste la contraseña?</el-button>
      </div>
    </div>
  </form>
</div>

<div class="bottom-container">
  <div class="row">
    <div class="col">
      <a href="#" style="color:white" class="btn"></a>
    </div>
    <div class="col">
      <a href="#" style="color:white" class="btn"></a>
    </div>
  </div>
</div>

<h2>Aún no eres miembro? Regístrate aquí abajo!</h2>
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="Nombre y Apellido">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="Sexo">
    <el-select v-model="form.region" placeholder="">
      <el-option label="Femenino" value="shanghai"></el-option>
      <el-option label="Masculino" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Fecha de Nacimiento">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Elige fecha" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Nombre de usuario">
    <el-input v-model="username"></el-input>
  </el-form-item>
  <el-form-item label="Contraseña">
    <el-input v-model="password" type ="password"></el-input>
  </el-form-item>
  <el-form-item label="¿Por qué quieres unirte?">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">FINALIZAR</el-button>
  </el-form-item>
</el-form>
<router-view/>
</body>
</template>

<script>
  export default {
    data(){
      return {
        form: {
          name: '',
          region: '',
          date1: '',

        }
      }

    },
    methods: {
      go(){
        this.$router.push({name: 'Menu'})
      },
      onSubmit() {
         this.$notify({
          title: '¡Listo!',
          message: 'Te registraste correctamente!',
          type: 'success'
         })
      },
      open3() {
        this.$prompt('Ingresa tu e-mail aquí abajo:', 'Recuperar Contraseña', {
          confirmButtonText: 'Recuperar',
          cancelButtonText: 'Cancelar',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Correo Inválido'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: 'Se ha enviado código de recuperación a ' + value + ', ingresa ya.'
          });
        }).catch(() => {
          this.$message({
            type: 'error',
            message: 'Recuperación Cancelada'
          });       
        });
      }
    }
  }
</script>

<style>
.el-form{
  width: 800px;
}
.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
body {
  font-family: Arial, Helvetica, sans-serif;
  
}
.el-button {
  position: relative;
  background-color: #4CAF50;
  border: none;
  font-size: 15px;
  color: #FFFFFF;
  padding: 20px;
  width: 189px;
  text-align: center;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.el-button:after {
  content: "";
  background: #90EE90;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.el-button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
* {
  box-sizing: border-box;
}

.container {
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px 0 30px 0;
} 

input,
.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none;
  
}

input:hover,
.btn:hover {
  opacity: 1;
}

.fb {
  background-color: #3B5998;
  color: white;
}

.twitter {
  background-color: #55ACEE;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.col {
  float: left;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.vl {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border: 2px solid #ddd;
  height: 175px;
}

.vl-innertext {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 8px 10px;
}

.hide-md-lg {
  display: none;
}


.bottom-container {
  text-align: center;
  background-color: #666;
  border-radius: 0px 0px 4px 4px;
}

@media screen and (max-width: 650px) {
  .col {
    width: 100%;
    margin-top: 0;
  }
  .vl {
    display: none;
  }
  .hide-md-lg {
    display: block;
    text-align: center;
  }
}
 
</style>
