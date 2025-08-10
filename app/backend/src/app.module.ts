import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { AgentsModule } from './modules/agents/agents.module';
import { ConversationsModule } from './modules/conversations/conversations.module';
import { MessagesModule } from './modules/messages/messages.module';
import { LabelsModule } from './modules/labels/labels.module';
import { TypificationsModule } from './modules/typifications/typifications.module';
import { BotModule } from './modules/bot/bot.module';
import { WaConnectorModule } from './modules/wa-connector/wa-connector.module';
import { CrmModule } from './modules/crm/crm.module';
import { N8nModule } from './modules/n8n/n8n.module';
import { AuditModule } from './modules/audit/audit.module';
import { ReportsModule } from './modules/reports/reports.module';
import { EventsGateway } from './sockets/events.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    AgentsModule,
    ConversationsModule,
    MessagesModule,
    LabelsModule,
    TypificationsModule,
    BotModule,
    WaConnectorModule,
    CrmModule,
    N8nModule,
    AuditModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
