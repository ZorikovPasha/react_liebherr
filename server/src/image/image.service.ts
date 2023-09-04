import { Injectable } from '@nestjs/common';
import sizeOf from 'buffer-image-size';
import sharp from 'sharp';
import crypto from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';

const replaceSpacesWithUnderscores = (str: string): string => {
  let formattedString = '';
  str.split('').forEach((char) => {
    if (char === ' ') {
      formattedString += '_';
    } else {
      formattedString += char;
    }
  });

  return formattedString;
};

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}

  async prepareForInsert(image: Express.Multer.File) {
    const imageDimensions = sizeOf(image.buffer);
    const hash = crypto.createHash('md5');
    hash.update(image.buffer);

    const compressedImage = await sharp(image.buffer).toBuffer();
    const imageNameWithoutExtension = image.filename
      .split('.')
      .slice(0, -1)
      .join('');
    const processedImageNameWithoutExtension = replaceSpacesWithUnderscores(
      imageNameWithoutExtension,
    );
    const imageExtension = image.filename.split('.').pop();

    const photo = {
      name: image.filename,
      alternativeText: '',
      caption: '',
      width: imageDimensions.width,
      height: imageDimensions.height,
      hash: hash.digest('hex'),
      ext: imageExtension ?? '',
      mime: image.mimetype,
      size: image.size / 1000,
      url: `/uploads/${processedImageNameWithoutExtension}_${hash.digest(
        'hex',
      )}.${imageExtension}`,
      provider: 'database',
      data: compressedImage,
    };

    return photo;
  }

  async create(file: Express.Multer.File) {
    return this.prisma.image.create({
      data: await this.prepareForInsert(file),
    });
  }
}
