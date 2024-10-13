<template>
  <v-app>
    <v-navigation-drawer
      app
      permanent
    >
      <v-list>
        <v-list-item-group>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>

          <!-- 必要に応じて他のメニュー項目を追加 -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-app-bar app>
        <v-toolbar-title>{{ useAppConfig().title }}</v-toolbar-title>
      </v-app-bar>

      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
/* 必要に応じてスタイルを調整してください */
</style>
