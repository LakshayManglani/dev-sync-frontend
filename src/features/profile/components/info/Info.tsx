import { useAppSelector } from '../../../../app/hooks';
import { selectSelectedProfile } from '../../profiles.slice';
import styles from './Info.module.scss';
import { selectCurrentUser } from '../../../auth/auth.slice';
import { Button } from '../../../../components';
import { Edit16Filled, MoreHorizontal16Filled } from '@fluentui/react-icons';

const Info = () => {
  return <ProfileOverview />;
};

const ProfileOverview = () => {
  const user = useAppSelector(selectCurrentUser);
  const profile = useAppSelector(selectSelectedProfile);

  const isCurrentUser = user?.username === profile?.username;

  return (
    <section className={`${styles.overview} glass`}>
      {/* Banner */}
      <div className={styles.bannerContainer}>
        <img
          src={profile?.bannerURL}
          alt="Profile banner"
          className={styles.banner}
        />
        {isCurrentUser && (
          <span className={`${styles.bannerEditButton}`}>
            <Button
              variant="secondary"
              size="small"
              status="rest"
              leftIcon={<Edit16Filled />}
              aria-label="Edit banner"
            />
          </span>
        )}

        <div className={`${styles.avatarContainer} glass`}>
          <img
            src={profile?.avatarURL}
            alt={`${profile?.givenName ?? 'User'}'s avatar`}
            className={styles.avatar}
          />
        </div>
      </div>

      <div className={styles.profileContent}>
        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          {isCurrentUser ? (
            <Button
              variant="secondary"
              size="small"
              status="ghost"
              leftIcon={<Edit16Filled />}
              aria-label="Edit profile"
            />
          ) : (
            <>
              <Button
                variant="primary"
                size="small"
                status="rest"
                label="Follow"
              />
              <Button
                variant="secondary"
                size="small"
                status="ghost"
                label="Message"
              />
              <Button
                variant="secondary"
                size="small"
                leftIcon={<MoreHorizontal16Filled />}
                aria-label="More options"
              />
            </>
          )}
        </div>

        {/* Profile Details */}
        <div className={styles.profileDetails}>
          <header>
            <span className={styles.name}>
              <h1 className="heading-large">
                {profile?.givenName} {profile?.familyName}
              </h1>
              {profile?.gender && (
                <p className="text-tertiary">
                  {profile?.gender.toLowerCase() === 'male'
                    ? '(He/him)'
                    : '(She/her)'}
                </p>
              )}
            </span>
            <p className="heading-large text-tertiary">@{profile?.username}</p>
          </header>

          <div>
            <p>{profile?.headline}</p>
            <p className="text-tertiary">{profile?.location}</p>
          </div>

          <div>
            <Button
              variant="secondary"
              size="small"
              label="Followers"
              counter={{ count: profile?.followers ?? 0 }}
              border="small"
            />
            <Button
              variant="secondary"
              size="small"
              label="Following"
              counter={{ count: profile?.following ?? 0 }}
              border="small"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
