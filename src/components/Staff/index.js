import Avatar from '@site/src/components/Avatar';
import styles from './index.module.css';

const MemberList = [
    {
      name: "Théo Cesbron",
      role: "Chef de projet",
      profil_icon: "/img/members/theo.jpg"
    },
    {
      name: "Sophie Raquin",
      role: "Responsable sociétale de l'entreprise",
      profil_icon: "/img/members/sophie.jpg"
    },
    {
      name: "Quentin Horgues",
      role: "Responsable communication",
      profil_icon: "/img/members/quentin.jpg"
    },
    {
      name: "Dario Weinberger",
      role: "Responsable communication",
      profil_icon: "/img/members/dario.jpg" 
    },
    {
      name: "Vincent Shurgaia",
      role: "Responsable preuve de concept",
      profil_icon: "/img/members/vincent.jpg"
    },
    {
      name: "Said Bouargalne",
      role: "Responsable preuve de concept",
      profil_icon: "/img/members/said.jpg"
    },
    {
      name: "Yoann Girard-le Plessis",
      role: "Responsable buisness model",
      profil_icon: "/img/members/yoann.jpg"
    },
    {
      name: "Floryan Gosselet",
      role: "Responsable buisness model",
      profil_icon: "/img/members/floryan.jpg"
    },
  ];


export default function Staff() {

  return (

    <article className='center_item'>
        <section className={styles.boxAvatar}>
          {MemberList.map((props, idx) => (
              <Avatar key={idx} {...props} />
          ))}
        </section>
    </article>
  );
}