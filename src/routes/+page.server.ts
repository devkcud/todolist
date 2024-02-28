import type { Actions } from "./$types";
import prisma from "$lib/server/prisma"

export const actions: Actions = {
    adicionar: async ({request}) => {
        const data = await request.formData();
        const tarefa = data.get('tarefa')!;
        await prisma.tarefa.create({data: {content: tarefa.toString()}})
    }
};