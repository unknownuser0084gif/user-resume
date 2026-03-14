
const ConvertToPersian = (num) => String(num).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]); 

export default ConvertToPersian;