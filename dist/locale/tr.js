// Larawoe React Validator v1.6.7 | Created By Dockwa | Moded By Mahpooya | MIT License | 2017 - Present
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['larawoe-react-validator'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('larawoe-react-validator'));
  } else {
    root.LarawoeReactValidatorLocaleTr = factory(root.LarawoeReactValidator);
  }
}(this, function(LarawoeReactValidator) {
"use strict";

// Turkish
LarawoeReactValidator.addLocale("tr", {
  accepted: {
    message: ":attribute onaylanmalıdır.",
    summary: "Kabul edilmesi gerekiyor."
  },
  after: {
    message: ":attribute :date tarihinden sonra olmalıdır.",
    summary: "Sonra :tarih."
  },
  after_or_equal: {
    message: ":attribute :date tarihinde veya sonra olmalıdır.",
    summary: "Sonra/üzerine :tarih."
  },
  alpha: {
    message: ":attribute sadece harf içerebilir.",
    summary: "Sadece harf özelliği."
  },
  alpha_space: {
    message: ":attribute sadece harf, ve boşluk karakteri içerebilir.",
    summary: "Sadece harf ve boşluklar."
  },
  alpha_num: {
    message: ":attribute sadece harf, ve rakam içerebilir.",
    summary: "Sadece harf ve rakamlar."
  },
  alpha_num_space: {
    message: ":attribute sadece harf, rakam, ve boşluk karakteri içerebilir.",
    summary: "Harf, rakam ve boşluklar."
  },
  alpha_num_dash: {
    message: ":attribute sadece harf, rakam, ve tire karakteri içerebilir.",
    summary: "Harf, rakam ve tireler."
  },
  alpha_num_dash_space: {
    message: ":attribute sadece harf, rakam, tire, ve boşluk karakteri içerebilir.",
    summary: "Harf, rakam, tireler ve boşluklar."
  },
  array: {
    message: ":attribute dizi tipinde olmalıdır.",
    summary: "Dizi gereklidir."
  },
  before: {
    message: ":attribute :date tarihinden önce olmalıdır.",
    summary: "Önce :tarih."
  },
  before_or_equal: {
    message: ":attribute :date tarihinde veya daha önce olmalıdır.",
    summary: "Önce/üzerine :tarih."
  },
  between: {
    message: ":attribute  :min - :max:type aralığında olmalıdır.",
    summary: ":min ile :max arasında :tür."
  },
  "boolean": {
    message: ":attribute geçerli bir mantıksal değer olmalıdır.",
    summary: "Bir mantıksal değer olmalıdır."
  },
  card_exp: {
    message: ":attribute geçerli bir sonlanma tarihi olmalıdır.",
    summary: "Geçerli son kullanma tarihi."
  },
  card_num: {
    message: ":attribute geçerli bir kredi kartı numarası olmalıdır.",
    summary: "Geçerli kredi kartı numarası."
  },
  currency: {
    message: ":attribute geçerli bir para tipi olmalıdır.",
    summary: "Geçerli para birimi."
  },
  date: {
    message: ":attribute tarih formatında olmalıdır.",
    summary: "Tarih gereklidir."
  },
  date_equals: {
    message: ":attribute :date tarihli olmalıdır.",
    summary: ":tarih tarihinde."
  },
  email: {
    message: ":attribute geçerli bir e-posta adresi olmalıdır.",
    summary: "Geçerli e-posta adresi."
  },
  "in": {
    message: "Seçilen :attribute :values olmalıdır.",
    summary: ":values içinde olmalıdır."
  },
  integer: {
    message: ":attribute sayı olmalıdır.",
    summary: "Tamsayı gereklidir."
  },
  max: {
    message: ":attribute :max:type dan büyük olamaz.",
    summary: "Maksimum: :max:type."
  },
  min: {
    message: ":attribute en az :min:type olmalıdır.",
    summary: "Minimum: :min:type."
  },
  not_in: {
    message: "Seçilen :attribute :values olamaz.",
    summary: ":values içinde olmamalıdır."
  },
  not_regex: {
    message: ":attribute gerekli formattan farklı olmalıdır.",
    summary: "Desene uymamalıdır."
  },
  numeric: {
    message: ":attribute sayı olmalıdır.",
    summary: "Sadece sayısal değerler."
  },
  phone: {
    message: ":attribute geçerli bir telefon numarası olmalıdır.",
    summary: "Geçerli telefon numarası."
  },
  regex: {
    message: ":attribute gerekli formatla uyumlu olmalıdır.",
    summary: "Desene uymalıdır."
  },
  required: {
    message: ":attribute alanı doldurulmalıdır.",
    summary: "Zorunlu."
  },
  size: {
    message: ":attribute :size:type tipinde olmalıdır.",
    summary: "Boyut: :size:type."
  },
  string: {
    message: ":attribute karakter dizisi olmalıdır.",
    summary: "Dize gereklidir."
  },
  "typeof": {
    message: ":attribute :type tipinde olmalıdır.",
    summary: "Yanlış tür, :type gereklidir."
  },
  url: {
    message: ":attribute url olmalıdır.",
    summary: "URL gereklidir"
  }
});
return null;
}));
