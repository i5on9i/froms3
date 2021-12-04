
import * as aws from 'aws-sdk';
import * as fs from 'fs';

export class AwsMgr {
  private s3: aws.S3;
  constructor() {
    this.s3 = new aws.S3();
  }
  /**
   * read
   */
  public async read() {

    const param = {
      Bucket: 'mybucket',
      Key: 'mykey/1/2015/03/26-00' // path to the object you're looking for
    }

    var readableStream = await this.s3.getObject(param).createReadStream();

    const chunks: any[] = [];
    readableStream.on('readable', () => {
      let chunk;
      while (null !== (chunk = readableStream.read())) {
        console.log(chunk)
        chunks.push(chunk);
      }
    });
    readableStream.on('end', () => {
      const content = chunks.join('');
    });
  }

}

