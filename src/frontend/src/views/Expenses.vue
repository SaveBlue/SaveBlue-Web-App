<template>
  <div class="Expenses">
    <div class="expense-grid mdl-grid">
      <div class="mdl-cell mdl-cell--1-col-desktop mdl-cell--hide-tablet " />

      <PieChartCard/>
      <GraphCard/>
      <div class="mdl-cell mdl-cell--1-col-desktop mdl-cell--hide-tablet " />

      <div class="mdl-cell mdl-cell--1-col-desktop mdl-cell--hide-tablet " />
      <TableCard/>
    </div>
  </div>
</template>

<script>
import GraphCard from "@/components/GraphCard";
import PieChartCard from "@/components/PieChartCard";
import TableCard from "@/components/TableCard";


export default {
  name: "Expenses",
  components: {TableCard, PieChartCard, GraphCard}
}
</script>

<style scoped>
.expense-grid {
  background: aquamarine;
}

.Expenses {
  width: 100%;
  position: center;
  background: red;
}
</style>