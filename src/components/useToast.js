//useToast.js
// composable : Its to create and maintain a global toast store and manage that.
import { reactive } from "vue";

const toasts = reactive([]);

function addToast({ location, title, content, icon,iconColor,timeout = 2000}) {
    toasts.push({
        id: Date.now(),
        iconColor:iconColor?iconColor:'toast-blue dark:toast-blue',
        location: ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'].includes(location) ? `.${location}` : '.bottom-right',
        title,
        content,
        icon,
        timeout
    });

    // Auto-remove after 5s
    if(toasts[0]?.timeout !== false ){
        setTimeout(() => {
            removeToast(toasts[0]?.id);
        },toasts[0].timeout);
    }
    
}

function removeToast(id) {
    const index = toasts.findIndex((t) => t.id === id);
    if (index !== -1) toasts.splice(index, 1);
}

export function useToast() {
    return { toasts, addToast, removeToast };
}
