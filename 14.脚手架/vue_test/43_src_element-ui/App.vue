<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Vue App</title>
      <link rel="stylesheet" href="./css/bootstrap.css" />
    </head>
    <body>
      <div>
        <button>2313213</button>
        <input type="text" />
        <sqy-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </sqy-row>
        <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
        <sqy-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </sqy-row>
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: "App",
};
</script>
