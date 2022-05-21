import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
// eslint-disable-next-line prettier/prettier
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
