<template>

<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="HTTP" name="first">
      <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://frontendchecklist.io/img/logos/logo-front-end-checklist.webp" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Ir al link del proyecto</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="data:image/jpeg;base64,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" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Ir al link del proyecto</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
    </el-tab-pane>
    <el-tab-pane label="WEB" name="second">
     <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://github.com/xxhomey19/nba-go"><el-button type="text" class="button">Ir al link del proyecto</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.github.com/vuejs/vue"><el-button type="text" class="button">Ir al link del proyecto</el-button></a>
        </div>
      </div>
    </el-card>
    <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://heml.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.github.com/go-ego/riot"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </el-col>
</el-row>
    </el-tab-pane>
    <el-tab-pane label="MOBIL" name="third">
      <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
    </el-tab-pane>
    <el-tab-pane label="INTERACTIVOS" name="fourth">
      <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
    </el-tab-pane>
    <el-tab-pane label="API's" name="seven">
      <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
    </el-tab-pane>
    <el-tab-pane label="OTROS" name="five">
      <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://frontendchecklist.io/"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.phpbb.com"><el-button type="text" class="button">Operating button</el-button></a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

    </el-tab-pane>
    <el-tab-pane label="Agregar un nuevo proyecto" name="six"><router-link to ="Formulario">Clic para ir al formulario</router-link></el-tab-pane>
  </el-tabs>
</template>


<script>
  export default {
    data() {
      return {
        activeName: 'first',
        currentDate: new Date()
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>