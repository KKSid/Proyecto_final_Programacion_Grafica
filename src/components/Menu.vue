<template>

<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="HTTP" name="first">
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
          <a href="https://www.github.com/vuejs/vue"><el-button type="text" class="button">Ir al link del sitio</el-button></a>
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
          <a href="https://heml.io/"><el-button type="text" class="button">Ir al link del sitio</el-button></a>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="/assets/logo.png" class="image">
      <div style="padding: 14px;">
        <span></span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <a href="https://www.github.com/go-ego/riot"><el-button type="text" class="button">Ir al link del sitio</el-button></a>
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