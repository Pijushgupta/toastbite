<!-- Toastify.vue -->
<!-- actual toast html -->
<script setup>
import { useToast } from "./useToast";

const {removeToast,toasts} = useToast();

</script>

<template>

    <Teleport  v-for="toast in toasts" :key="toast.id" :to="toast.location">
        <div id="toast-default" class="toast-card" role="alert">
            <!-- icon area -->
            <div :class="toast.iconColor" class="toast-icon-wrap" v-html=" toast.icon"></div>
            <!-- icon area ends -->
            <div>
                <div class="toast-title"> {{ toast.title }}</div>
                <div class="toast-content">{{ toast.content }}</div>
            </div>
            <button type="button"
                class="toast-close"
                @click="removeToast(toast.id)" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </button>
        </div>
    </Teleport>
    
</template>