<template>
  <div class="Dashboard">
      <div class="mdl-card mdl-cell--10-col mdl-cell--1-offset-desktop  mdl-shadow--4dp">
        <div class="mdl-grid">
          <AccountDashboardCard/>
          <AccountDashboardCard/>
          <AccountDashboardCard/>
        </div>
      </div>
    <FAB/>
  </div>
</template>

<script>
import AccountDashboardCard from "@/components/AccountDashboardCard";
import FAB from "@/components/FAB";
export default {
name: "Dashboard",
  components: {FAB, AccountDashboardCard}
}
</script>

<style scoped>

.Dashboard {
  width: 100%;
  position: center;
}

</style>