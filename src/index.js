import { ExcelExtractor } from "@flatfile/plugin-xlsx-extractor";

export default function (listener) {
  listener.use(ExcelExtractor());

}
