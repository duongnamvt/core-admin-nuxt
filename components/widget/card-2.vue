<template>
    <div class="flex flex-wrap w-full rounded-md shadow-md p-0 m-0">
        <div class="w-full flex flex-wrap pt-4 pr-4 pl-4 items-center absolute">
        <slot name="icon">
            <span class="bg-blue-100 p-2 rounded-full">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </span>
        </slot>
        <span class="text-xl font-semibold text-gray-500 w-full">
            <slot name="text">
                120 users
            </slot>
        </span>
        </div>
        <div ref="chart" class="w-full p-0 m-0"></div>
    </div>
</template>

<script>
import ApexCharts from "apexcharts"
export default {
    data() {
        return {
             options: {
                grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                },
                chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
                type: "area",
                dataLabels: {
                    enabled: false,
                },
                },

                dataLabels: {
                enabled: false,
                },
                series: [
                {
                    name: "sales",
                    data: [50, 35, 40, 35, 50, 49, 60, 70, 91, 125],
                },
                ],
                xaxis: {
                labels: {
                    show: false,
                },
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                },
                yaxis: {
                labels: {
                    show: false,
                },
                },
            },
        }
    },
    mounted() {
        var vm = this;
        vm.$nextTick(()=> {
            let chart = new ApexCharts(vm.$refs.chart, vm.options);
            chart.render();
        })
    }
}
</script>

<style>
.apexcharts-grid {
  display: none;
}
</style>