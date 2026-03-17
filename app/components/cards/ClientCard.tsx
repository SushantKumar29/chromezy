// app/components/cards/ClientCard.tsx
import Image from "next/image";
import { CLIENTS_CONTENT } from "@/app/mock/constants/clients";
import styles from "@/app/styles/sections/Clients.module.css";
import { ClientCardProps } from "@/app/types/clients";

const ClientCard = ({ client }: ClientCardProps) => {
  const cardClass = client.selected
    ? `${styles.clientCard} ${styles.clientCardSelected}`
    : `${styles.clientCard} ${styles.clientCardDefault}`;

  const quoteClass = client.textHighlight
    ? `${styles.quoteText} ${styles.quoteTextHighlight}`
    : styles.quoteText;

  return (
    <div data-card className={cardClass}>
      <div>
        <Image
          width={24}
          height={24}
          src={CLIENTS_CONTENT.icons.quote}
          alt="quote icon"
          className={styles.quoteIcon}
        />
        <p className={quoteClass}>{client.quote}</p>
      </div>

      <div>
        <div className={styles.clientInfo}>
          <div className={styles.clientName}>{client.name}</div>
          <div className={styles.clientRole}>{client.role}</div>
        </div>

        <div className={styles.divider} />

        <div className={styles.projectDetails}>
          <div className={styles.detailsLeft}>
            <div>Star Rating &ndash; {client.rating}</div>
            <div>Project &ndash; {client.project}</div>
            <div>Country &ndash; {client.country}</div>
          </div>

          <Image
            width={client.logo.width}
            height={client.logo.height}
            src={client.logo.src}
            alt={client.name}
            className={styles.clientLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
