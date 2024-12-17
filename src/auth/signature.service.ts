import { Injectable } from '@nestjs/common';

import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';

@Injectable()
export class SignatureService {
  private prefixMessage = 'I am signing my one-time nonce: ';

  private getFullMessage(nonce: number) {
    return this.prefixMessage + nonce;
  }

  public verifySignature(
    publicAddress: string,
    signature: string,
    nonce: number,
  ): boolean {
    const msg = this.getFullMessage(nonce);

    const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
    const address = recoverPersonalSignature({
      data: msgBufferHex,
      sig: signature,
    });

    return address.toLowerCase() === publicAddress.toLowerCase();
  }
}
