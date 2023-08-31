import { rest } from 'msw';
import categoriesData from "../public/Categories.json"
export const handlers = [
  rest.get('/api/categories', (req, res, ctx) => {
    return res(ctx.json(categoriesData));
  }),
];

