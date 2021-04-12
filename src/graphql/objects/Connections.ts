import type { Nullable } from 'extended-utility-types';
import type {
	BranchProtectionRule,
	BranchProtectionRuleConflict,
	BranchProtectionRuleConflictEdge,
	BranchProtectionRuleEdge,
	CheckAnnotation,
	CheckAnnotationEdge,
	CheckRun,
	CheckRunEdge,
	CheckSuite,
	CheckSuiteEdge,
	Commit,
	CommitComment,
	CommitCommentEdge,
	CommitEdge,
	CreatedCommitContribution,
	CreatedCommitContributionEdge,
	CreatedIssueContribution,
	CreatedIssueContributionEdge,
	CreatedPullRequestContribution,
	CreatedPullRequestContributionEdge,
	CreatedPullRequestReviewContribution,
	CreatedPullRequestReviewContributionEdge,
	CreatedRepositoryContribution,
	CreatedRepositoryContributionEdge,
	CWE,
	CWEEdge,
	DeployKey,
	DeployKeyEdge,
	Deployment,
	DeploymentEdge,
	DeploymentStatus,
	DeploymentStatusEdge,
	EnterpriseAdministratorEdge,
	EnterpriseAdministratorInvitation,
	EnterpriseAdministratorInvitationEdge,
	EnterpriseMember,
	EnterpriseMemberEdge,
	EnterpriseOrganizationMembershipEdge,
	EnterpriseOutsideCollaboratorEdge,
	EnterprisePendingCollaboratorEdge,
	EnterprisePendingMemberInvitationEdge,
	EnterpriseRepositoryInfo,
	EnterpriseRepositoryInfoEdge,
	EnterpriseServerInstallation,
	EnterpriseServerInstallationEdge,
	EnterpriseServerUserAccount,
	EnterpriseServerUserAccountEdge,
	EnterpriseServerUserAccountEmail,
	EnterpriseServerUserAccountEmailEdge,
	EnterpriseServerUserAccountsUpload,
	EnterpriseServerUserAccountsUploadEdge,
	EnterpriseUserAccount,
	EnterpriseUserAccountEdge,
	ExternalIdentity,
	ExternalIdentityEdge,
	Gist,
	GistComment,
	GistCommentEdge,
	GistEdge,
	GitActor,
	GitActorEdge,
	IpAllowListEntry,
	IpAllowListEntryEdge,
	Issue,
	IssueComment,
	IssueCommentEdge,
	IssueEdge,
	IssueTimelineItem,
	IssueTimelineItemEdge,
	IssueTimelineItems,
	IssueTimelineItemsEdge,
	Label,
	LabelEdge,
	Language,
	LanguageEdge,
	MarketplaceListing,
	MarketplaceListingEdge,
	MetaField,
	Milestone,
	MilestoneEdge,
	Organization,
	OrganizationAuditEntry,
	OrganizationAuditEntryEdge,
	OrganizationEdge,
	OrganizationInvitation,
	OrganizationInvitationEdge,
	OrganizationMemberEdge,
	Package,
	PackageEdge,
	PackageFile,
	PackageFileEdge,
	PackageVersion,
	PackageVersionEdge,
	PageInfo,
	PinnableItem,
	PinnableItemEdge,
	PinnedIssue,
	PinnedIssueEdge,
	Project,
	ProjectCard,
	ProjectCardEdge,
	ProjectColumn,
	ProjectColumnEdge,
	ProjectEdge,
	PublicKey,
	PublicKeyEdge,
	PullRequest,
	PullRequestChangedFile,
	PullRequestChangedFileEdge,
	PullRequestCommit,
	PullRequestCommitEdge,
	PullRequestEdge,
	PullRequestReview,
	PullRequestReviewComment,
	PullRequestReviewCommentEdge,
	PullRequestReviewEdge,
	PullRequestReviewThread,
	PullRequestReviewThreadEdge,
	PullRequestTimelineItem,
	PullRequestTimelineItemEdge,
	PullRequestTimelineItems,
	PullRequestTimelineItemsEdge,
	PushAllowance,
	PushAllowanceEdge,
	ReactingUserEdge,
	Reaction,
	ReactionEdge,
	Ref,
	RefEdge,
	Release,
	ReleaseAsset,
	ReleaseAssetEdge,
	ReleaseEdge,
	Repository,
	RepositoryCollaboratorEdge,
	RepositoryEdge,
	RepositoryInvitation,
	RepositoryInvitationEdge,
	RepositoryTopic,
	RepositoryTopicEdge,
	RepositoryVulnerabilityAlert,
	RepositoryVulnerabilityAlertEdge,
	ReviewDismissalAllowance,
	ReviewDismissalAllowanceEdge,
	ReviewRequest,
	ReviewRequestEdge,
	SavedReply,
	SavedReplyEdge,
	SearchResultItem,
	SearchResultItemEdge,
	SecurityAdvisory,
	SecurityAdvisoryEdge,
	SecurityVulnerability,
	SecurityVulnerabilityEdge,
	SponsorableItem,
	SponsorableItemEdge,
	Sponsorship,
	SponsorshipEdge,
	SponsorsTier,
	SponsorsTierEdge,
	StargazerEdge,
	StarredRepositoryEdge,
	StatusCheckRollupContext,
	StatusCheckRollupContextEdge,
	Submodule,
	SubmoduleEdge,
	Team,
	TeamDiscussion,
	TeamDiscussionComment,
	TeamDiscussionCommentEdge,
	TeamDiscussionEdge,
	TeamEdge,
	TeamMemberEdge,
	TeamRepositoryEdge,
	User,
	UserContentEdit,
	UserContentEditEdge,
	UserEdge,
	UserStatus,
	UserStatusEdge,
	VerifiableDomain,
	VerifiableDomainEdge
} from '../';

export interface Connection<T, U> {
	/**
	 * A list of edges.
	 */
	edges?: Nullable<Nullable<T>[]>;

	/**
	 * A list of nodes.
	 */
	nodes?: U[];

	/**
	 * Information to aid in pagination.
	 */
	pageInfo: PageInfo;

	/**
	 * Identifies the total count of items in the connection.
	 */
	totalCount: number;
}

export type BranchProtectionRuleConflictConnection = Connection<
	BranchProtectionRuleConflictEdge,
	BranchProtectionRuleConflict
> &
	MetaField<'BranchProtectionRuleConflictConnection'>;

export type BranchProtectionRuleConnection = Connection<BranchProtectionRuleEdge, BranchProtectionRule> &
	MetaField<'BranchProtectionRuleConnection'>;

export type CWEConnection = Connection<CWEEdge, CWE> & MetaField<'CWEConnection'>;

export type CheckAnnotationConnection = Connection<CheckAnnotationEdge, CheckAnnotation> &
	MetaField<'CheckAnnotationConnection'>;

export type CheckRunConnection = Connection<CheckRunEdge, CheckRun> & MetaField<'CheckRunConnection'>;

export type CheckSuiteConnection = Connection<CheckSuiteEdge, CheckSuite> & MetaField<'CheckSuiteConnection'>;

export type CommitCommentConnection = Connection<CommitCommentEdge, CommitComment> &
	MetaField<'CommitCommentConnection'>;

export type CommitConnection = Connection<CommitEdge, Commit> & MetaField<'CommitConnection'>;

export type CommitHistoryConnection = Connection<CommitEdge, Commit> & MetaField<'CommitHistoryConnection'>;

export type CreatedCommitContributionConnection = Connection<CreatedCommitContributionEdge, CreatedCommitContribution> &
	MetaField<'CreatedCommitContributionConnection'>;

export type CreatedIssueContributionConnection = Connection<CreatedIssueContributionEdge, CreatedIssueContribution> &
	MetaField<'CreatedIssueContributionConnection'>;

export type CreatedPullRequestContributionConnection = Connection<
	CreatedPullRequestContributionEdge,
	CreatedPullRequestContribution
> &
	MetaField<'CreatedPullRequestContributionConnection'>;

export type CreatedPullRequestReviewContributionConnection = Connection<
	CreatedPullRequestReviewContributionEdge,
	CreatedPullRequestReviewContribution
> &
	MetaField<'CreatedPullRequestReviewContributionConnection'>;

export type CreatedRepositoryContributionConnection = Connection<
	CreatedRepositoryContributionEdge,
	CreatedRepositoryContribution
> &
	MetaField<'CreatedRepositoryContributionConnection'>;

export type DeployKeyConnection = Connection<DeployKeyEdge, DeployKey> & MetaField<'DeployKeyConnection'>;

export type DeploymentConnection = Connection<DeploymentEdge, Deployment> & MetaField<'DeploymentConnection'>;

export type DeploymentStatusConnection = Connection<DeploymentStatusEdge, DeploymentStatus> &
	MetaField<'DeploymentStatusConnection'>;

export type EnterpriseAdministratorConnection = Connection<EnterpriseAdministratorEdge, User> &
	MetaField<'EnterpriseAdministratorConnection'>;

export type EnterpriseAdministratorInvitationConnection = Connection<
	EnterpriseAdministratorInvitationEdge,
	EnterpriseAdministratorInvitation
> &
	MetaField<'EnterpriseAdministratorInvitationConnection'>;

export type EnterpriseMemberConnection = Connection<EnterpriseMemberEdge, EnterpriseMember> &
	MetaField<'EnterpriseMemberConnection'>;

export type EnterpriseOrganizationMembershipConnection = Connection<
	EnterpriseOrganizationMembershipEdge,
	Organization
> &
	MetaField<'EnterpriseOrganizationMembershipConnection'>;

export type EnterpriseOutsideCollaboratorConnection = Connection<EnterpriseOutsideCollaboratorEdge, User> &
	MetaField<'EnterpriseOutsideCollaboratorConnection'>;

export type EnterprisePendingCollaboratorConnection = Connection<EnterprisePendingCollaboratorEdge, User> &
	MetaField<'EnterprisePendingCollaboratorConnection'>;

export interface EnterprisePendingMemberInvitationConnection
	extends Connection<EnterprisePendingMemberInvitationEdge, OrganizationInvitation>,
		MetaField<'EnterprisePendingMemberInvitationConnection'> {
	/**
	 * Identifies the total count of unique users in the connection.
	 */
	totalUniqueUserCount: number;
}

export type EnterpriseRepositoryInfoConnection = Connection<EnterpriseRepositoryInfoEdge, EnterpriseRepositoryInfo> &
	MetaField<'EnterpriseRepositoryInfoConnection'>;

export type EnterpriseServerInstallationConnection = Connection<
	EnterpriseServerInstallationEdge,
	EnterpriseServerInstallation
> &
	MetaField<'EnterpriseServerInstallationConnection'>;

export type EnterpriseServerUserAccountConnection = Connection<
	EnterpriseServerUserAccountEdge,
	EnterpriseServerUserAccount
> &
	MetaField<'EnterpriseServerUserAccountConnection'>;

export type EnterpriseServerUserAccountEmailConnection = Connection<
	EnterpriseServerUserAccountEmailEdge,
	EnterpriseServerUserAccountEmail
> &
	MetaField<'EnterpriseServerUserAccountEmailConnection'>;

export type EnterpriseServerUserAccountsUploadConnection = Connection<
	EnterpriseServerUserAccountsUploadEdge,
	EnterpriseServerUserAccountsUpload
> &
	MetaField<'EnterpriseServerUserAccountsUploadConnection'>;

export type EnterpriseUserAccountConnection = Connection<EnterpriseUserAccountEdge, EnterpriseUserAccount> &
	MetaField<'EnterpriseUserAccountConnection'>;

export type ExternalIdentityConnection = Connection<ExternalIdentityEdge, ExternalIdentity> &
	MetaField<'ExternalIdentityConnection'>;

export type FollowerConnection = Connection<UserEdge, User> & MetaField<'FollowerConnection'>;

export type FollowingConnection = Connection<UserEdge, User> & MetaField<'FollowingConnection'>;

export type GistCommentConnection = Connection<GistCommentEdge, GistComment> & MetaField<'GistCommentConnection'>;

export type GistConnection = Connection<GistEdge, Gist> & MetaField<'GistConnection'>;

export type GitActorConnection = Connection<GitActorEdge, GitActor> & MetaField<'GitActorConnection'>;

export type IpAllowListEntryConnection = Connection<IpAllowListEntryEdge, IpAllowListEntry> &
	MetaField<'IpAllowListEntryConnection'>;

export type IssueCommentConnection = Connection<IssueCommentEdge, IssueComment> & MetaField<'IssueCommentConnection'>;

export type IssueConnection = Connection<IssueEdge, Issue> & MetaField<'IssueConnection'>;

export type IssueTimelineConnection = Connection<IssueTimelineItemEdge, IssueTimelineItem> &
	MetaField<'IssueTimelineConnection'>;

export interface IssueTimelineItemsConnection
	extends Connection<IssueTimelineItemsEdge, IssueTimelineItems>,
		MetaField<'IssueTimelineItemsConnection'> {
	/**
	 * Identifies the count of items after applying `before` and `after` filters.
	 */
	filteredCount: number;

	/**
	 * Identifies the count of items after applying `before`/`after` filters and
	 * `first`/`last`/`skip` slicing.
	 */
	pageCount: number;

	/**
	 * Identifies the date and time when the timeline was last updated.
	 */
	updatedAt: string;
}

export type LabelConnection = Connection<LabelEdge, Label> & MetaField<'LabelConnection'>;

export interface LanguageConnection extends Connection<LanguageEdge, Language>, MetaField<'LanguageConnection'> {
	/**
	 * The total size in bytes of files written in that language.
	 */
	totalSize: number;
}

export type MarketplaceListingConnection = Connection<MarketplaceListingEdge, MarketplaceListing> &
	MetaField<'MarketplaceListingConnection'>;

export type MilestoneConnection = Connection<MilestoneEdge, Milestone> & MetaField<'MilestoneConnection'>;

export type OrganizationAuditEntryConnection = Connection<OrganizationAuditEntryEdge, OrganizationAuditEntry> &
	MetaField<'OrganizationAuditEntryConnection'>;

export type OrganizationConnection = Connection<OrganizationEdge, Organization> & MetaField<'OrganizationConnection'>;

export type OrganizationInvitationConnection = Connection<OrganizationInvitationEdge, OrganizationInvitation> &
	MetaField<'OrganizationInvitationConnection'>;

export type OrganizationMemberConnection = Connection<OrganizationMemberEdge, User> &
	MetaField<'OrganizationMemberConnection'>;

export type PackageConnection = Connection<PackageEdge, Package> & MetaField<'PackageConnection'>;

export type PackageFileConnection = Connection<PackageFileEdge, PackageFile> & MetaField<'PackageFileConnection'>;

export type PackageVersionConnection = Connection<PackageVersionEdge, PackageVersion> &
	MetaField<'PackageVersionConnection'>;

export type PinnableItemConnection = Connection<PinnableItemEdge, PinnableItem> & MetaField<'PinnableItemConnection'>;

export type PinnedIssueConnection = Connection<PinnedIssueEdge, PinnedIssue> & MetaField<'PinnedIssueConnection'>;

export type ProjectCardConnection = Connection<ProjectCardEdge, ProjectCard> & MetaField<'ProjectCardConnection'>;

export type ProjectColumnConnection = Connection<ProjectColumnEdge, ProjectColumn> &
	MetaField<'ProjectColumnConnection'>;

export type ProjectConnection = Connection<ProjectEdge, Project> & MetaField<'ProjectConnection'>;

export type PublicKeyConnection = Connection<PublicKeyEdge, PublicKey> & MetaField<'PublicKeyConnection'>;

export type PullRequestChangedFileConnection = Connection<PullRequestChangedFileEdge, PullRequestChangedFile> &
	MetaField<'PullRequestChangedFileConnection'>;

export type PullRequestCommitConnection = Connection<PullRequestCommitEdge, PullRequestCommit> &
	MetaField<'PullRequestCommitConnection'>;

export type PullRequestConnection = Connection<PullRequestEdge, PullRequest> & MetaField<'PullRequestConnection'>;

export type PullRequestReviewCommentConnection = Connection<PullRequestReviewCommentEdge, PullRequestReviewComment> &
	MetaField<'PullRequestReviewCommentConnection'>;

export type PullRequestReviewConnection = Connection<PullRequestReviewEdge, PullRequestReview> &
	MetaField<'PullRequestReviewConnection'>;

export type PullRequestReviewThreadConnection = Connection<PullRequestReviewThreadEdge, PullRequestReviewThread> &
	MetaField<'PullRequestReviewThreadConnection'>;

export type PullRequestTimelineConnection = Connection<PullRequestTimelineItemEdge, PullRequestTimelineItem> &
	MetaField<'PullRequestTimelineConnection'>;

export interface PullRequestTimelineItemsConnection
	extends Connection<PullRequestTimelineItemsEdge, PullRequestTimelineItems>,
		MetaField<'PullRequestTimelineItemsConnection'> {
	/**
	 * Identifies the count of items after applying `before` and `after` filters.
	 */
	filteredCount: number;

	/**
	 * Identifies the count of items after applying `before`/`after` filters and
	 * `first`/`last`/`skip` slicing.
	 */
	pageCount: number;

	/**
	 * Identifies the date and time when the timeline was last updated.
	 */
	updatedAt: string;
}

export type PushAllowanceConnection = Connection<PushAllowanceEdge, PushAllowance> &
	MetaField<'PushAllowanceConnection'>;

export type ReactingUserConnection = Connection<ReactingUserEdge, User> & MetaField<'ReactingUserConnection'>;

export interface ReactionConnection extends Connection<ReactionEdge, Reaction>, MetaField<'ReactionConnection'> {
	/**
	 * Whether or not the authenticated user has left a reaction on the subject.
	 */
	viewerHasReacted: boolean;
}

export type RefConnection = Connection<RefEdge, Ref> & MetaField<'RefConnection'>;

export type ReleaseAssetConnection = Connection<ReleaseAssetEdge, ReleaseAsset> & MetaField<'ReleaseAssetConnection'>;

export type ReleaseConnection = Connection<ReleaseEdge, Release> & MetaField<'ReleaseConnection'>;

export type RepositoryCollaboratorConnection = Connection<RepositoryCollaboratorEdge, User> &
	MetaField<'RepositoryCollaboratorConnection'>;

export interface RepositoryConnection
	extends Connection<RepositoryEdge, Repository>,
		MetaField<'RepositoryConnection'> {
	/**
	 * The total size in kilobytes of all repositories in the connection.
	 */
	totalDiskUsage: number;
}

export type RepositoryInvitationConnection = Connection<RepositoryInvitationEdge, RepositoryInvitation> &
	MetaField<'RepositoryInvitationConnection'>;

export type RepositoryTopicConnection = Connection<RepositoryTopicEdge, RepositoryTopic> &
	MetaField<'RepositoryTopicConnection'>;

export type RepositoryVulnerabilityAlertConnection = Connection<
	RepositoryVulnerabilityAlertEdge,
	RepositoryVulnerabilityAlert
> &
	MetaField<'RepositoryVulnerabilityAlertConnection'>;

export type ReviewDismissalAllowanceConnection = Connection<ReviewDismissalAllowanceEdge, ReviewDismissalAllowance> &
	MetaField<'ReviewDismissalAllowanceConnection'>;

export type ReviewRequestConnection = Connection<ReviewRequestEdge, ReviewRequest> &
	MetaField<'ReviewRequestConnection'>;

export type SavedReplyConnection = Connection<SavedReplyEdge, SavedReply> & MetaField<'SavedReplyConnection'>;

export interface SearchResultItemConnection
	extends Omit<Connection<SearchResultItemEdge, SearchResultItem>, 'totalCount'>,
		MetaField<'SearchResultItemConnection'> {
	/**
	 * The number of pieces of code that matched the search query.
	 */
	codeCount: number;

	/**
	 * The number of issues that matched the search query.
	 */
	issueCount: number;

	/**
	 * The number of repositories that matched the search query.
	 */
	repositoryCount: number;

	/**
	 * The number of users that matched the search query.
	 */
	userCount: number;

	/**
	 * The number of wiki pages that matched the search query.
	 */
	wikiCount: number;
}

export type SecurityAdvisoryConnection = Connection<SecurityAdvisoryEdge, SecurityAdvisory> &
	MetaField<'SecurityAdvisoryConnection'>;

export type SecurityVulnerabilityConnection = Connection<SecurityVulnerabilityEdge, SecurityVulnerability> &
	MetaField<'SecurityVulnerabilityConnection'>;

export type SponsorableItemConnection = Connection<SponsorableItemEdge, SponsorableItem> &
	MetaField<'SponsorableItemConnection'>;

export type SponsorsTierConnection = Connection<SponsorsTierEdge, SponsorsTier> & MetaField<'SponsorsTierConnection'>;

export type SponsorshipConnection = Connection<SponsorshipEdge, Sponsorship> & MetaField<'SponsorshipConnection'>;

export type StargazerConnection = Connection<StargazerEdge, User> & MetaField<'StargazerConnection'>;

export interface StarredRepositoryConnection
	extends Connection<StarredRepositoryEdge, Repository>,
		MetaField<'StarredRepositoryConnection'> {
	/**
	 * Is the list of stars for this user truncated? This is true for users that have many stars.
	 */
	isOverLimit: boolean;
}

export type StatusCheckRollupContextConnection = Connection<StatusCheckRollupContextEdge, StatusCheckRollupContext> &
	MetaField<'StatusCheckRollupContextConnection'>;

export type SubmoduleConnection = Connection<SubmoduleEdge, Submodule> & MetaField<'SubmoduleConnection'>;

export type TeamConnection = Connection<TeamEdge, Team> & MetaField<'TeamConnection'>;

export type TeamDiscussionCommentConnection = Connection<TeamDiscussionCommentEdge, TeamDiscussionComment> &
	MetaField<'TeamDiscussionCommentConnection'>;

export type TeamDiscussionConnection = Connection<TeamDiscussionEdge, TeamDiscussion> &
	MetaField<'TeamDiscussionConnection'>;

export type TeamMemberConnection = Connection<TeamMemberEdge, User> & MetaField<'TeamMemberConnection'>;

export type TeamRepositoryConnection = Connection<TeamRepositoryEdge, Repository> &
	MetaField<'TeamRepositoryConnection'>;

export type UserConnection = Connection<UserEdge, User> & MetaField<'UserConnection'>;

export type UserContentEditConnection = Connection<UserContentEditEdge, UserContentEdit> &
	MetaField<'UserContentEditConnection'>;

export type UserStatusConnection = Connection<UserStatusEdge, UserStatus> & MetaField<'UserStatusConnection'>;

export type VerifiableDomainConnection = Connection<VerifiableDomainEdge, VerifiableDomain> &
	MetaField<'VerifiableDomainConnection'>;
