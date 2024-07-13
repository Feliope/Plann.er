import dayjs from "dayjs";
import loacalizedFormat from "dayjs/plugin/localizedFormat";
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
dayjs.extend(loacalizedFormat);

export { dayjs };