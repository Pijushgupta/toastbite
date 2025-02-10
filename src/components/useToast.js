//useToast.js
// composable : Its to create and maintain a global toast store and manage that.
import { reactive } from "vue";

const toasts = reactive([]);

function addToast({ type, location, content, icon, iconSr }) {
    toasts.push({
        id: Date.now(),
        type,
        location: ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'].includes(location) ? `.${location}` : '.bottom-right',
        content,
        icon,
        iconSr,
    });

    // Auto-remove after 5s
    setTimeout(() => {
        removeToast(toasts[0]?.id);
    }, 5000);
}

function removeToast(id) {
    const index = toasts.findIndex((t) => t.id === id);
    if (index !== -1) toasts.splice(index, 1);
}

export function useToast() {
    return { toasts, addToast, removeToast };
}
