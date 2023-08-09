<template>
  <v-app>
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      accept로 어떤 파일을 수용할건지 설정할 수 있음
    </div>
    <template>
      <v-file-input accept="image/*" label="File input"></v-file-input>
    </template>
    <!-- 2 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      chips - 파일을 업로드할 경우 chip 형태로 보임 / counter - input 길이 속성,
      디폴트는 25 / show-size - 파일의 크기를 보여줌 / truncate-length -
      파일이름을 몇개까지 보여주고 생략처리할지 결정
    </div>
    <v-file-input
      chips
      counter
      multiple
      show-size
      small-chips
      truncate-length="9"
    ></v-file-input>
    <!-- 2 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      filled / prepend-icon 속성
    </div>
    <template>
      <v-file-input
        label="File input"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>
    </template>
  </v-app>
</template>
