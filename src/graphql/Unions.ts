import type {
	AddedToProjectEvent,
	App,
	AssignedEvent,
	AutomaticBaseChangeFailedEvent,
	AutomaticBaseChangeSucceededEvent,
	AutoMergeDisabledEvent,
	AutoMergeEnabledEvent,
	AutoRebaseEnabledEvent,
	AutoSquashEnabledEvent,
	BaseRefChangedEvent,
	BaseRefDeletedEvent,
	BaseRefForcePushedEvent,
	Bot,
	CheckRun,
	ClosedEvent,
	CommentDeletedEvent,
	Commit,
	CommitCommentThread,
	ConnectedEvent,
	ConvertedNoteToIssueEvent,
	ConvertToDraftEvent,
	CreatedIssueContribution,
	CreatedPullRequestContribution,
	CreatedRepositoryContribution,
	CrossReferencedEvent,
	DemilestonedEvent,
	DeployedEvent,
	DeploymentEnvironmentChangedEvent,
	DisconnectedEvent,
	Enterprise,
	EnterpriseUserAccount,
	Gist,
	HeadRefDeletedEvent,
	HeadRefForcePushedEvent,
	HeadRefRestoredEvent,
	Issue,
	IssueComment,
	LabeledEvent,
	LockedEvent,
	Mannequin,
	MarkedAsDuplicateEvent,
	MarketplaceListing,
	MembersCanDeleteReposClearAuditEntry,
	MembersCanDeleteReposDisableAuditEntry,
	MembersCanDeleteReposEnableAuditEntry,
	MentionedEvent,
	MergedEvent,
	MilestonedEvent,
	MovedColumnsInProjectEvent,
	OauthApplicationCreateAuditEntry,
	OrgAddBillingManagerAuditEntry,
	OrgAddMemberAuditEntry,
	Organization,
	OrgBlockUserAuditEntry,
	OrgConfigDisableCollaboratorsOnlyAuditEntry,
	OrgConfigEnableCollaboratorsOnlyAuditEntry,
	OrgCreateAuditEntry,
	OrgDisableOauthAppRestrictionsAuditEntry,
	OrgDisableSamlAuditEntry,
	OrgDisableTwoFactorRequirementAuditEntry,
	OrgEnableOauthAppRestrictionsAuditEntry,
	OrgEnableSamlAuditEntry,
	OrgEnableTwoFactorRequirementAuditEntry,
	OrgInviteMemberAuditEntry,
	OrgInviteToBusinessAuditEntry,
	OrgOauthAppAccessApprovedAuditEntry,
	OrgOauthAppAccessDeniedAuditEntry,
	OrgOauthAppAccessRequestedAuditEntry,
	OrgRemoveBillingManagerAuditEntry,
	OrgRemoveMemberAuditEntry,
	OrgRemoveOutsideCollaboratorAuditEntry,
	OrgRestoreMemberAuditEntry,
	OrgRestoreMemberMembershipOrganizationAuditEntryData,
	OrgRestoreMemberMembershipRepositoryAuditEntryData,
	OrgRestoreMemberMembershipTeamAuditEntryData,
	OrgUnblockUserAuditEntry,
	OrgUpdateDefaultRepositoryPermissionAuditEntry,
	OrgUpdateMemberAuditEntry,
	OrgUpdateMemberRepositoryCreationPermissionAuditEntry,
	OrgUpdateMemberRepositoryInvitationPermissionAuditEntry,
	PinnedEvent,
	PrivateRepositoryForkingDisableAuditEntry,
	PrivateRepositoryForkingEnableAuditEntry,
	PullRequest,
	PullRequestCommit,
	PullRequestCommitCommentThread,
	PullRequestReview,
	PullRequestReviewComment,
	PullRequestReviewThread,
	PullRequestRevisionMarker,
	ReadyForReviewEvent,
	ReferencedEvent,
	RemovedFromProjectEvent,
	RenamedTitleEvent,
	ReopenedEvent,
	RepoAccessAuditEntry,
	RepoAddMemberAuditEntry,
	RepoAddTopicAuditEntry,
	RepoArchivedAuditEntry,
	RepoChangeMergeSettingAuditEntry,
	RepoConfigDisableAnonymousGitAccessAuditEntry,
	RepoConfigDisableCollaboratorsOnlyAuditEntry,
	RepoConfigDisableContributorsOnlyAuditEntry,
	RepoConfigDisableSockpuppetDisallowedAuditEntry,
	RepoConfigEnableAnonymousGitAccessAuditEntry,
	RepoConfigEnableCollaboratorsOnlyAuditEntry,
	RepoConfigEnableContributorsOnlyAuditEntry,
	RepoConfigEnableSockpuppetDisallowedAuditEntry,
	RepoConfigLockAnonymousGitAccessAuditEntry,
	RepoConfigUnlockAnonymousGitAccessAuditEntry,
	RepoCreateAuditEntry,
	RepoDestroyAuditEntry,
	RepoRemoveMemberAuditEntry,
	RepoRemoveTopicAuditEntry,
	Repository,
	RepositoryVisibilityChangeDisableAuditEntry,
	RepositoryVisibilityChangeEnableAuditEntry,
	RestrictedContribution,
	ReviewDismissedEvent,
	ReviewRequestedEvent,
	ReviewRequestRemovedEvent,
	StatusContext,
	SubscribedEvent,
	Team,
	TeamAddMemberAuditEntry,
	TeamAddRepositoryAuditEntry,
	TeamChangeParentTeamAuditEntry,
	TeamRemoveMemberAuditEntry,
	TeamRemoveRepositoryAuditEntry,
	TransferredEvent,
	UnassignedEvent,
	UnlabeledEvent,
	UnlockedEvent,
	UnmarkedAsDuplicateEvent,
	UnpinnedEvent,
	UnsubscribedEvent,
	User,
	UserBlockedEvent
} from './';

/**
 * Types that can be assigned to issues.
 */
export type Assignee = Bot | Mannequin | Organization | User;

/**
 * Types that can initiate an audit log event.
 */
export type AuditEntryActor = Exclude<Assignee, Mannequin>;

/**
 * The object which triggered a `ClosedEvent`.
 */
export type Closer = Commit | PullRequest;

/**
 * Represents either a issue the viewer can access or a restricted contribution.
 */
export type CreatedIssueOrRestrictedContribution = CreatedIssueContribution | RestrictedContribution;

/**
 * Represents either a pull request the viewer can access or a restricted contribution.
 */
export type CreatedPullRequestOrRestrictedContribution = CreatedPullRequestContribution | RestrictedContribution;

/**
 * Represents either a repository the viewer can access or a restricted contribution.
 */
export type CreatedRepositoryOrRestrictedContribution = CreatedRepositoryContribution | RestrictedContribution;

/**
 * An object that is a member of an enterprise.
 */
export type EnterpriseMember = EnterpriseUserAccount | User;

/**
 * Types that can own an IP allow list.
 */
export type IpAllowListOwner = Enterprise | Organization;

/**
 * Used for return value of `Repository.issueOrPullRequest`.
 */
export type IssueOrPullRequest = Issue | PullRequest;

/**
 * An item in an issue timeline.
 */
export type IssueTimelineItem =
	| AssignedEvent
	| ClosedEvent
	| Commit
	| CrossReferencedEvent
	| DemilestonedEvent
	| IssueComment
	| LabeledEvent
	| LockedEvent
	| MilestonedEvent
	| ReferencedEvent
	| RenamedTitleEvent
	| ReopenedEvent
	| SubscribedEvent
	| TransferredEvent
	| UnassignedEvent
	| UnlabeledEvent
	| UnlockedEvent
	| UnsubscribedEvent
	| UserBlockedEvent;

/**
 * An item in an issue timeline.
 */
export type IssueTimelineItems =
	| AddedToProjectEvent
	| AssignedEvent
	| ClosedEvent
	| CommentDeletedEvent
	| Commit
	| ConnectedEvent
	| ConvertedNoteToIssueEvent
	| CrossReferencedEvent
	| DemilestonedEvent
	| DisconnectedEvent
	| IssueComment
	| LabeledEvent
	| LockedEvent
	| MarkedAsDuplicateEvent
	| MilestonedEvent
	| MovedColumnsInProjectEvent
	| PinnedEvent
	| ReferencedEvent
	| RemovedFromProjectEvent
	| RenamedTitleEvent
	| ReopenedEvent
	| SubscribedEvent
	| TransferredEvent
	| UnassignedEvent
	| UnlabeledEvent
	| UnlockedEvent
	| UnmarkedAsDuplicateEvent
	| UnpinnedEvent
	| UnsubscribedEvent
	| UserBlockedEvent;

/**
 * Types that can be inside a Milestone.
 */
export type MilestoneItem = IssueOrPullRequest;

/**
 * Types of memberships that can be restored for an Organization member.
 */
export type OrgRestoreMemberAuditEntryMembership =
	| OrgRestoreMemberMembershipOrganizationAuditEntryData
	| OrgRestoreMemberMembershipRepositoryAuditEntryData
	| OrgRestoreMemberMembershipTeamAuditEntryData;

/**
 * An audit entry in an organization audit log.
 */
export type OrganizationAuditEntry =
	| MembersCanDeleteReposClearAuditEntry
	| MembersCanDeleteReposDisableAuditEntry
	| MembersCanDeleteReposEnableAuditEntry
	| OauthApplicationCreateAuditEntry
	| OrgAddBillingManagerAuditEntry
	| OrgAddMemberAuditEntry
	| OrgBlockUserAuditEntry
	| OrgConfigDisableCollaboratorsOnlyAuditEntry
	| OrgConfigEnableCollaboratorsOnlyAuditEntry
	| OrgCreateAuditEntry
	| OrgDisableOauthAppRestrictionsAuditEntry
	| OrgDisableSamlAuditEntry
	| OrgDisableTwoFactorRequirementAuditEntry
	| OrgEnableOauthAppRestrictionsAuditEntry
	| OrgEnableSamlAuditEntry
	| OrgEnableTwoFactorRequirementAuditEntry
	| OrgInviteMemberAuditEntry
	| OrgInviteToBusinessAuditEntry
	| OrgOauthAppAccessApprovedAuditEntry
	| OrgOauthAppAccessDeniedAuditEntry
	| OrgOauthAppAccessRequestedAuditEntry
	| OrgRemoveBillingManagerAuditEntry
	| OrgRemoveMemberAuditEntry
	| OrgRemoveOutsideCollaboratorAuditEntry
	| OrgRestoreMemberAuditEntry
	| OrgUnblockUserAuditEntry
	| OrgUpdateDefaultRepositoryPermissionAuditEntry
	| OrgUpdateMemberAuditEntry
	| OrgUpdateMemberRepositoryCreationPermissionAuditEntry
	| OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
	| PrivateRepositoryForkingDisableAuditEntry
	| PrivateRepositoryForkingEnableAuditEntry
	| RepoAccessAuditEntry
	| RepoAddMemberAuditEntry
	| RepoAddTopicAuditEntry
	| RepoArchivedAuditEntry
	| RepoChangeMergeSettingAuditEntry
	| RepoConfigDisableAnonymousGitAccessAuditEntry
	| RepoConfigDisableCollaboratorsOnlyAuditEntry
	| RepoConfigDisableContributorsOnlyAuditEntry
	| RepoConfigDisableSockpuppetDisallowedAuditEntry
	| RepoConfigEnableAnonymousGitAccessAuditEntry
	| RepoConfigEnableCollaboratorsOnlyAuditEntry
	| RepoConfigEnableContributorsOnlyAuditEntry
	| RepoConfigEnableSockpuppetDisallowedAuditEntry
	| RepoConfigLockAnonymousGitAccessAuditEntry
	| RepoConfigUnlockAnonymousGitAccessAuditEntry
	| RepoCreateAuditEntry
	| RepoDestroyAuditEntry
	| RepoRemoveMemberAuditEntry
	| RepoRemoveTopicAuditEntry
	| RepositoryVisibilityChangeDisableAuditEntry
	| RepositoryVisibilityChangeEnableAuditEntry
	| TeamAddMemberAuditEntry
	| TeamAddRepositoryAuditEntry
	| TeamChangeParentTeamAuditEntry
	| TeamRemoveMemberAuditEntry
	| TeamRemoveRepositoryAuditEntry;

/**
 * Types that can grant permissions on a repository to a user.
 */
export type PermissionGranter = Organization | Repository | Team;

/**
 * Types that can be pinned to a profile page.
 */
export type PinnableItem = Gist | Repository;

/**
 * Types that can be inside Project Cards.
 */
export type ProjectCardItem = IssueOrPullRequest;

/**
 * An item in a pull request timeline.
 */
export type PullRequestTimelineItem =
	| AssignedEvent
	| BaseRefDeletedEvent
	| BaseRefForcePushedEvent
	| ClosedEvent
	| Commit
	| CommitCommentThread
	| CrossReferencedEvent
	| DemilestonedEvent
	| DeployedEvent
	| DeploymentEnvironmentChangedEvent
	| HeadRefDeletedEvent
	| HeadRefForcePushedEvent
	| HeadRefRestoredEvent
	| IssueComment
	| LabeledEvent
	| LockedEvent
	| MergedEvent
	| MilestonedEvent
	| PullRequestReview
	| PullRequestReviewComment
	| PullRequestReviewThread
	| ReferencedEvent
	| RenamedTitleEvent
	| ReopenedEvent
	| ReviewDismissedEvent
	| ReviewRequestRemovedEvent
	| ReviewRequestedEvent
	| SubscribedEvent
	| UnassignedEvent
	| UnlabeledEvent
	| UnlockedEvent
	| UnsubscribedEvent
	| UserBlockedEvent;

/**
 * An item in a pull request timeline.
 */
export type PullRequestTimelineItems =
	| AddedToProjectEvent
	| AssignedEvent
	| AutoMergeDisabledEvent
	| AutoMergeEnabledEvent
	| AutoRebaseEnabledEvent
	| AutoSquashEnabledEvent
	| AutomaticBaseChangeFailedEvent
	| AutomaticBaseChangeSucceededEvent
	| BaseRefChangedEvent
	| BaseRefDeletedEvent
	| BaseRefForcePushedEvent
	| ClosedEvent
	| CommentDeletedEvent
	| ConnectedEvent
	| ConvertToDraftEvent
	| ConvertedNoteToIssueEvent
	| CrossReferencedEvent
	| DemilestonedEvent
	| DeployedEvent
	| DeploymentEnvironmentChangedEvent
	| DisconnectedEvent
	| HeadRefDeletedEvent
	| HeadRefForcePushedEvent
	| HeadRefRestoredEvent
	| IssueComment
	| LabeledEvent
	| LockedEvent
	| MarkedAsDuplicateEvent
	| MentionedEvent
	| MergedEvent
	| MilestonedEvent
	| MovedColumnsInProjectEvent
	| PinnedEvent
	| PullRequestCommit
	| PullRequestCommitCommentThread
	| PullRequestReview
	| PullRequestReviewThread
	| PullRequestRevisionMarker
	| ReadyForReviewEvent
	| ReferencedEvent
	| RemovedFromProjectEvent
	| RenamedTitleEvent
	| ReopenedEvent
	| ReviewDismissedEvent
	| ReviewRequestRemovedEvent
	| ReviewRequestedEvent
	| SubscribedEvent
	| TransferredEvent
	| UnassignedEvent
	| UnlabeledEvent
	| UnlockedEvent
	| UnmarkedAsDuplicateEvent
	| UnpinnedEvent
	| UnsubscribedEvent
	| UserBlockedEvent;

/**
 * Types that can be an actor.
 */
export type PushAllowanceActor = App | Team | User;

/**
 * Any referencable object.
 */
export type ReferencedSubject = IssueOrPullRequest;

/**
 * An object which has a renamable title.
 */
export type RenamedTitleSubject = IssueOrPullRequest;

/**
 * Types that can be requested reviewers.
 */
export type RequestedReviewer = Mannequin | Team | User;

/**
 * Types that can be an actor.
 */
export type ReviewDismissalAllowanceActor = Exclude<RequestedReviewer, Mannequin>;

/**
 * The results of a search.
 */
export type SearchResultItem =
	| Exclude<PushAllowanceActor, Team>
	| IssueOrPullRequest
	| MarketplaceListing
	| Organization
	| Repository;

/**
 * Entities that can sponsor others via GitHub Sponsors.
 */
export type Sponsor = Organization | User;

/**
 * Entities that can be sponsored via GitHub Sponsors.
 */
export type SponsorableItem = Sponsor;

/**
 * Types that can be inside a StatusCheckRollup context.
 */
export type StatusCheckRollupContext = CheckRun | StatusContext;

/**
 * Types that can own a verifiable domain.
 */
export type VerifiableDomainOwner = Enterprise | Organization;
