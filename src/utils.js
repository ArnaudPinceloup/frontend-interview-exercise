import moment from 'moment';

export const getRankingTimeframeInterval = (timeframeSelector) => {
  if (timeframeSelector === 'week') {
    return {
      start: moment().startOf('isoWeek'),
      stop: moment(),
    };
  } else if (timeframeSelector === 'last_week') { // add for select last week
      return {
          start: moment().subtract(1, 'weeks').startOf('isoWeek'),
          stop: moment().subtract(1, 'weeks').endOf('isoWeek'),
      };
  } else if (timeframeSelector === 'month') {
    return {
      start: moment().startOf('month'),
      stop: moment(),
    };
  }
  return null;
};

export const computeRanking = (profiles, timeframeSelector) => {
  const { start, stop } = getRankingTimeframeInterval(timeframeSelector);

  return profiles
    .filter(profile => profile.registered)
    .map(profile => ({
      id: profile.id,
      name: profile.full_name,
      picture: profile.avatar,
      points: profile.received_rewards.reduce((total, reward) => {
        const creation = moment(reward.created_at); // todo : profiles.json need update
        if (creation.isBetween(start, stop, 'day', '[]')) { // last param for day inclusion
          return total + reward.points;
        }
        return total;
      }, 0),
    })).sort((a, b) => b.points - a.points);
};
