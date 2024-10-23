import { join } from 'path';
import { appConfig } from '@config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { CarModule } from '@modules';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaModule } from './prisma';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    CarModule, PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
