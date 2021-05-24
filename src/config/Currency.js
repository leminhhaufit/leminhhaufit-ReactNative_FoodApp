import 'intl';
import 'intl/locale-data/jsonp/en';
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
});


export default formatter;