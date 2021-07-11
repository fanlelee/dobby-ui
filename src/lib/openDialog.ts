import {createApp, h} from "vue";
import Dialog from './Dialog.vue'

export const openDialog = (options) => {
    const {ok,cancel,header,main} = options

    const div = document.createElement('div')
    document.body.appendChild(div)

    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible) => {
                        if (newVisible === false) {
                            close()
                        }
                    },
                    ok,
                    cancel
                },
                {
                    header,
                    main
                }

            )
        }
    })
    app.mount(div)
    const close = () => {
        app.unmount()
        div.remove()
    }
}
