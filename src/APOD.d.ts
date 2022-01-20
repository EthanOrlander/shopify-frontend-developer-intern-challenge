/* eslint-disable @typescript-eslint/naming-convention */

export interface APODResult {
  /** Image owner */
  copyright: string;
  /** Date the image was captured */
  date: string;
  /** Explanation of the image */
  explanation: string;
  /** HD url of the image */
  hdurl: string;
  /** Media type of the url */
  media_type: string;
  /** API service version */
  service_version: string;
  /** Title of the image */
  title: string;
  /** SD url of the image */
  url: string;
}
