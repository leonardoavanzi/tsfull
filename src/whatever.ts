import {z} from 'zod'

const dataObjFromApi = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string()
})

fetch('/aaa').then(res => res.json()).then(result => {
    const data = dataObjFromApi.parse(result)

})