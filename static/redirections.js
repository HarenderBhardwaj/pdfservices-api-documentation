/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

(() => {
  let prefixPath = (window.location.host.indexOf('localhost') === 0 ? '' : 'document-services/docs/overview/');
  let redirectPath = '';

  if (
    (window.location.hash !== "" &&
      window.location.pathname === "/" &&
      window.location.host.indexOf("localhost") === 0) ||
    (window.location.hash !== "" &&
      window.location.pathname === "/document-services/docs/" &&
      window.location.host.indexOf("localhost") < 0)
  ) {
    switch (window.location.hash) {
      case "#adobe-analytics":
        redirectPath =
          prefixPath + "pdf-embed-api/howtodata/#adobe-analytics";
        break;
      case "#images":
        redirectPath =
          prefixPath + "document-generation-api/templatetags/#images";
        break;
      case "#pdf-extract-api-for-extracting-pdf-structure-and-information":
        redirectPath =
          prefixPath +
          "#pdf-extract-api-for-extracting-pdf-structure-and-information";
        break;
      case "#beta-feature-extract-text-and-tables-and-styling-info":
        redirectPath =
          prefixPath +
          "pdf-extract-api/howtos/extract-api/#beta-feature-extract-text-and-tables-and-styling-info";
        break;
      case "#export-pdf":
        redirectPath =
          prefixPath +
          "pdf-services-api/howtos/export-pdf/#export-a-pdf";
        break;
      case "#extract-pdf":
        redirectPath =
          prefixPath + "pdf-services-api/howtos/extract-pdf";
        break;
      case "#extract-text-and-tables":
        redirectPath =
          prefixPath +
          "pdf-services-api/howtos/extract-pdf/#extract-text-and-tables";
        break;
      case "#extract-text-and-tables-and-character-bounding-boxes-w-renditions":
        redirectPath =
          prefixPath +
          "pdf-services-api/howtos/extract-pdf/#extract-text-and-tables-and-character-bounding-boxes-w-renditions";
        break;
      case "#extract-text-and-tables-and-table-structure-as-csv-w-renditions":
        redirectPath =
          prefixPath +
          "pdf-services-api/howtos/extract-pdf/#extract-text-and-tables-and-table-structure-as-csv-w-renditions";
        break;
      case "#extract-text-and-tables-w-renditions":
        redirectPath =
          prefixPath +
          "pdf-services-api/howtos/extract-pdf/#extract-text-and-tables-w-tables-renditions";
        break;
      case "#extract-text-from-a-pdf":
        redirectPath =
          prefixPath +
          "pdf-services-api/howtos/extract-pdf/#extract-text-from-a-pdf";
        break;
      case "#ocr-pdf":
        redirectPath = prefixPath + "pdf-services-api/howtos/ocr-pdf";
        break;
      case "#protect-pdf":
        redirectPath =
          prefixPath + "pdf-services-api/howtos/protect-pdf";
        break;
      case "#protect-pdfs-with-user-password":
        redirectPath =
          prefixPath +
          "pdf-services-api/howtos/protect-pdf/#protect-pdfs-with-owner-password";
        break;
      case "#split-pdf":
        redirectPath =
          prefixPath + "pdf-services-api/howtos/split-pdf";
        break;
      case "#java":
        redirectPath = prefixPath + "pdf-services-api/#java";
        break;
      case "#node-js":
        redirectPath = prefixPath + "pdf-services-api/#nodejs";
        break;
      case "#python":
        redirectPath = prefixPath + "pdf-services-api/#python";
        break;
      case "#sdk":
        redirectPath = prefixPath + "pdf-services-api/#sdk";
        break;
    }
    window.location.href =
      "http://" + window.location.host + "/" + redirectPath;
  }
})();