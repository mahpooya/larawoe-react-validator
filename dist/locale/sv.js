// Larawoe React Validator v1.6.7 | Created By Dockwa | Moded By Mahpooya | MIT License | 2017 - Present
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['larawoe-react-validator'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('larawoe-react-validator'));
  } else {
    root.LarawoeReactValidatorLocaleSv = factory(root.LarawoeReactValidator);
  }
}(this, function(LarawoeReactValidator) {
"use strict";

// Swedish
LarawoeReactValidator.addLocale("sv", {
  accepted: {
    message: "Fält :attribut måste accepteras.",
    summary: "Acceptans krävs."
  },
  after: {
    message: "Fält :attribut måste vara efter :date.",
    summary: "Efter :date."
  },
  after_or_equal: {
    message: "Fält :attribut måste matcha eller vara efter :date.",
    summary: "Efter/på :date."
  },
  alpha: {
    message: "Fält :attribut kan bara innehålla bokstäver.",
    summary: "Endast bokstäver."
  },
  alpha_space: {
    message: "Fält :attributet kan bara innehålla bokstäver och mellanslag.",
    summary: "Endast bokstäver och mellanslag."
  },
  alpha_num: {
    message: "Fält :attribut kan bara innehålla bokstäver och siffror.",
    summary: "Endast bokstäver och siffror."
  },
  alpha_num_space: {
    message: "Fält :attribut kan bara innehålla bokstäver, siffror och mellanslag.",
    summary: "Endast bokstäver, siffror och mellanslag."
  },
  alpha_num_dash: {
    message: "Fält :attribut kan bara innehålla bokstäver, siffror och bindestreck.",
    summary: "Endast bokstäver, siffror och bindestreck."
  },
  alpha_num_dash_space: {
    message: "Fält :attribut kan bara innehålla bokstäver, siffror, bindestreck och mellanslag.",
    summary: "Endast bokstäver, siffror, bindestreck och mellanslag."
  },
  array: {
    message: "Fält :attribut måste vara en array.",
    summary: "Array krävs."
  },
  before: {
    message: "Fält :attribut måste vara före :date.",
    summary: "Före :date."
  },
  before_or_equal: {
    message: "Fält :attribut måste matcha eller vara före :date.",
    summary: "Före/på :date."
  },
  between: {
    message: "Fält :attribut måste vara mellan :min och :max:type.",
    summary: "Mellan :min och :max:type."
  },
  "boolean": {
    message: "Fält :attribut måste vara booleskt.",
    summary: "Måste vara en boolean."
  },
  card_exp: {
    message: "Fält :attribut måste vara ett giltigt utgångsdatum.",
    summary: "Giltigt utgångsdatum."
  },
  card_num: {
    message: "Fält :attribut måste vara ett giltigt kreditkortsnummer.",
    summary: "Giltigt kreditkortsnummer."
  },
  currency: {
    message: "Fält :attribut måste vara en giltig valuta.",
    summary: "Giltig valuta."
  },
  date: {
    message: "Fält :attribut måste vara ett datum.",
    summary: "Datum krävs."
  },
  date_equals: {
    message: "Fält :attribut måste matcha :date.",
    summary: "På datumet :date"
  },
  email: {
    message: "Fält :attribut måste vara en giltig e-postadress.",
    summary: "Giltig e-postadress."
  },
  "in": {
    message: "Fält valt: attribut måste vara :values.",
    summary: "Måste vara i :values."
  },
  integer: {
    message: "Fält :attribut måste vara ett heltal.",
    summary: "Heltal krävs."
  },
  max: {
    message: "Fält :attribut får inte överstiga :max:type.",
    summary: "Max: :max:type."
  },
  min: {
    message: "Fält :attribut måste åtminstone vara :min:type.",
    summary: "Minst: :min:type."
  },
  not_in: {
    message: "Fält vald :attribut får inte vara :values.",
    summary: "Får inte vara i :values."
  },
  not_regex: {
    message: "Fält :attributet får inte matcha det obligatoriska mönstret.",
    summary: "Får inte matcha mönstret."
  },
  numeric: {
    message: "Fält :attribut måste vara ett nummer.",
    summary: "Endast numeriskt."
  },
  phone: {
    message: "Fält :attribut måste vara ett giltigt telefonnummer.",
    summary: "Giltigt telefonnummer."
  },
  regex: {
    message: "Fält :attribut måste matcha det obligatoriska mönstret.",
    summary: "Måste matcha mönstret."
  },
  required: {
    message: "Fält :attribut krävs.",
    summary: "Obligatoriskt."
  },
  size: {
    message: "Fält :attribut måste vara :size:type.",
    summary: "Storlek: :size:type."
  },
  string: {
    message: "Fält :attribut måste vara en sträng.",
    summary: "Sträng krävs."
  },
  "typeof": {
    message: "Fält :attribut är inte den korrekta typen av :type.",
    summary: "Felaktig typ, :type krävs."
  },
  url: {
    message: "Fält :attribut måste vara en url.",
    summary: "URL krävs"
  }
});
return null;
}));
