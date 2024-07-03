// Larawoe React Validator v1.6.7 | Created By Dockwa | Moded By Mahpooya | MIT License | 2017 - Present
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['larawoe-react-validator'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('larawoe-react-validator'));
  } else {
    root.LarawoeReactValidatorLocaleFa = factory(root.LarawoeReactValidator);
  }
}(this, function(LarawoeReactValidator) {
"use strict";

// Persian
LarawoeReactValidator.addLocale("fa", {
  accepted: {
    message: ":attribute مورد پذیرش قرار نگرفت",
    summary: "پذیرفتنی"
  },
  after: {
    message: ":attribute باید تاریخی بعد از :date باشد.",
    summary: "بعد از :date"
  },
  after_or_equal: {
    message: ":attribute باید تاریخی برابر یا بعد از :date باشد.",
    summary: "برابر یا بعد از :date"
  },
  alpha: {
    message: ":attribute باید فقط شامل حروف انگلیسی باشد.",
    summary: "فقط حروف انگلیسی"
  },
  alpha_space: {
    message: ":attribute باید فقط شامل حروف انگلیسی و فاصله باشد.",
    summary: "فقط حروف انگلیسی و فاصله"
  },
  alpha_num: {
    message: ":attribute باید فقط شامل اعداد و حروف انگلیسی باشد.",
    summary: "فقط اعداد و حروف انگلیسی"
  },
  alpha_num_space: {
    message: ":attribute باید فقط شامل اعداد و حروف انگلیسی و فاصله باشد.",
    summary: "فقط اعداد و حروف انگلیسی و فاصله"
  },
  alpha_num_dash: {
    message: ":attribute باید فقط شامل اعداد و حروف انگلیسی و خط تیره باشد.",
    summary: "فقط اعداد و حروف انگلیسی و خط تیره"
  },
  alpha_num_dash_space: {
    message: ":attribute باید فقط شامل اعداد و حروف انگلیسی، خط تیره و فاصله باشد.",
    summary: "فقط اعداد و حروف انگلیسی، خط تیره و فاصله"
  },
  array: {
    message: ":attribute باید یک آرایه باشد.",
    summary: "یک آرایه"
  },
  before: {
    message: ":attribute باید قبل از :date باشد.",
    summary: "قبل از :date"
  },
  before_or_equal: {
    message: ":attribute باید قبل یا برابر با :date باشد.",
    summary: "قبل یا برابر با :date"
  },
  between: {
    message: ":attribute باید بین :min و :max :type باشد.",
    summary: "بین :min و :max :type"
  },
  "boolean": {
    message: ":attribute باید یک بول باشد.",
    summary: "یک بول"
  },
  card_exp: {
    message: ":attribute باید یک تاریخ انقضا معتبر باشد.",
    summary: "تاریخ انقضا معتبر"
  },
  card_num: {
    message: ":attribute باید یک شماره کارت اعتباری معتبر باشد.",
    summary: "شماره کارت اعتباری معتبر"
  },
  currency: {
    message: ":attribute باید یک ارز معتبر باشد.",
    summary: "ارز معتبر"
  },
  date: {
    message: ":attribute باید تاریخ باشد.",
    summary: "تاریخ"
  },
  date_equals: {
    message: ":attribute باید در بازه :date باشد.",
    summary: "در بازه :date"
  },
  email: {
    message: ":attribute بایدآدرس ایمیل معتبر باشد.",
    summary: "ایمیل معتبر"
  },
  "in": {
    message: ":attribute باید یکی از :values باشد.",
    summary: "یکی از :values"
  },
  integer: {
    message: ":attribute باید یک عدد صحیح باشد.",
    summary: "عدد صحیح"
  },
  max: {
    message: ":attribute باید کمتر از :max :type باشد.",
    summary: "کمتر از :max :type"
  },
  min: {
    message: ":attribute باید بیشتر از :min :type باشد.",
    summary: "بیشتر از :min :type"
  },
  not_in: {
    message: ":attribute نباید مشابه با :values باشد.",
    summary: "نامشابه با :values"
  },
  not_regex: {
    message: ":attribute نباید با الگوی مورد نیاز مطابقت داشته باشد.",
    summary: "نامطابقت با الگو"
  },
  numeric: {
    message: ":attribute باید عدد باشد.",
    summary: "عدد"
  },
  phone: {
    message: ":attribute باید یک شماره تلفن معتبر باشد.",
    summary: "شماره تلفن معتبر"
  },
  regex: {
    message: ":attribute باید با الگوی مورد نیاز مطابقت داشته باشد.",
    summary: "مطابقت با الگو"
  },
  required: {
    message: "قسمت :attribute الزامی است.",
    summary: "الزامی"
  },
  size: {
    message: ":attribute باید تبدیل شود به size :type:.",
    summary: "سایز :size :type"
  },
  string: {
    message: ":attribute باید یک رشته حروف باشد.",
    summary: "رشته حروف"
  },
  "typeof": {
    message: "نوع :attribute نوع صحیح :type نیست.",
    summary: "نوع صحیح :type"
  },
  url: {
    message: ":attribute باید یک آدرس اینترنتی باشد.",
    summary: "آدرس اینترنتی"
  }
});
return null;
}));
