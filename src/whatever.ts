import {z} from 'zod'

const dataObjFromApi = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string()
})

type dataObjFromApiType = z.infer<typeof dataObjFromApi>

fetch('/open').then(res => res.json()).then(result => {
    const data = dataObjFromApi.parse(result)

})