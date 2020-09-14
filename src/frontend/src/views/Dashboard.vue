<template>
  <div class="Dashboard">
      <div class="mdl-card mdl-cell--10-col mdl-cell--1-offset-desktop  mdl-shadow--4dp">
        <div class="mdl-grid">
          <AccountDashboardCard/>
          <AccountDashboardCard/>
          <AccountDashboardCard/>
        </div>
      </div>
  </div>
</template>

<script>
import AccountDashboardCard from "@/components/AccountDashboardCard";
export default {
name: "Dashboard",
  components: {AccountDashboardCard}
}
</script>

<style scoped>

.Dashboard {
  width: 100%;
  position: center;
}

</style>