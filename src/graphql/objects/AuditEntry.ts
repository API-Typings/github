import type { Nullable } from 'extended-utility-types';
import type {
	AuditEntry,
	EnterpriseAuditEntryData,
	MetaField,
	Node,
	OauthApplicationAuditEntryData,
	OauthApplicationCreateAuditEntryState,
	OrgAddMemberAuditEntryPermission,
	OrganizationAuditEntryData,
	OrgCreateAuditEntryBillingPlan,
	OrgRemoveBillingManagerAuditEntryReason,
	OrgRemoveMemberAuditEntryMembershipType,
	OrgRemoveMemberAuditEntryReason,
	OrgRemoveOutsideCollaboratorAuditEntryMembershipType,
	OrgRemoveOutsideCollaboratorAuditEntryReason,
	OrgRestoreMemberAuditEntryMembership,
	OrgUpdateDefaultRepositoryPermissionAuditEntryPermission,
	OrgUpdateMemberAuditEntryPermission,
	OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility,
	RepoAccessAuditEntryVisibility,
	RepoAddMemberAuditEntryVisibility,
	RepoArchivedAuditEntryVisibility,
	RepoChangeMergeSettingAuditEntryMergeType,
	RepoCreateAuditEntryVisibility,
	RepoDestroyAuditEntryVisibility,
	RepoRemoveMemberAuditEntryVisibility,
	RepositoryAuditEntryData,
	Team,
	TeamAuditEntryData,
	TopicAuditEntryData,
	User
} from '../';

/**
 * Audit log entry for a `members_can_delete_repos.clear` event.
 */
export type MembersCanDeleteReposClearAuditEntry = AuditEntry &
	EnterpriseAuditEntryData &
	Node &
	OrganizationAuditEntryData &
	MetaField<'MembersCanDeleteReposClearAuditEntry'>;

/**
 * Audit log entry for a `members_can_delete_repos.disable` event.
 */
export type MembersCanDeleteReposDisableAuditEntry = AuditEntry &
	EnterpriseAuditEntryData &
	Node &
	OrganizationAuditEntryData &
	MetaField<'MembersCanDeleteReposDisableAuditEntry'>;

/**
 * Audit log entry for a `members_can_delete_repos.enable` event.
 */
export type MembersCanDeleteReposEnableAuditEntry = AuditEntry &
	EnterpriseAuditEntryData &
	Node &
	OrganizationAuditEntryData &
	MetaField<'MembersCanDeleteReposEnableAuditEntry'>;

/**
 * Audit log entry for a `oauth_application.create` event.
 */
export interface OauthApplicationCreateAuditEntry
	extends AuditEntry,
		Node,
		OauthApplicationAuditEntryData,
		OrganizationAuditEntryData,
		MetaField<'OauthApplicationCreateAuditEntry'> {
	/**
	 * The rate limit of the OAuth Application.
	 */
	rateLimit?: Nullable<number>;

	/**
	 * The state of the OAuth Application.
	 */
	state?: Nullable<OauthApplicationCreateAuditEntryState>;
}

/**
 * Audit log entry for a org.add_billing_manager.
 */
export interface OrgAddBillingManagerAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgAddBillingManagerAuditEntry'> {
	/**
	 * The email address used to invite a billing manager for the organization.
	 */
	invitationEmail?: Nullable<string>;
}

/**
 * Audit log entry for a org.add_member.
 */
export interface OrgAddMemberAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgAddMemberAuditEntry'> {
	/**
	 * The permission level of the member added to the organization.
	 */
	permission?: Nullable<OrgAddMemberAuditEntryPermission>;
}

/**
 * Audit log entry for a org.block_user.
 */
export interface OrgBlockUserAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgBlockUserAuditEntry'> {
	/**
	 * The blocked user.
	 */
	blockedUser?: Nullable<User>;

	/**
	 * The username of the blocked user.
	 */
	blockedUserName?: Nullable<string>;

	/**
	 * The HTTP path for the blocked user.
	 */
	blockedUserResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for the blocked user.
	 */
	blockedUserUrl?: Nullable<string>;
}

/**
 * Audit log entry for a `org.config.disable_collaborators_only` event.
 */
export type OrgConfigDisableCollaboratorsOnlyAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	MetaField<'OrgConfigDisableCollaboratorsOnlyAuditEntry'>;

/**
 * Audit log entry for a `org.config.enable_collaborators_only` event.
 */
export type OrgConfigEnableCollaboratorsOnlyAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	MetaField<'OrgConfigEnableCollaboratorsOnlyAuditEntry'>;

/**
 * Audit log entry for a `org.create` event.
 */
export interface OrgCreateAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgCreateAuditEntry'> {
	/**
	 * The billing plan for the Organization.
	 */
	billingPlan?: Nullable<OrgCreateAuditEntryBillingPlan>;
}

/**
 * Audit log entry for a `org.disable_oauth_app_restrictions` event.
 */
export type OrgDisableOauthAppRestrictionsAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	MetaField<'OrgDisableOauthAppRestrictionsAuditEntry'>;

/**
 * Audit log entry for a `org.disable_saml` event.
 */
export interface OrgDisableSamlAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgDisableSamlAuditEntry'> {
	/**
	 * The SAML provider's digest algorithm URL.
	 */
	digestMethodUrl?: Nullable<string>;

	/**
	 * The SAML provider's issuer URL.
	 */
	issuerUrl?: Nullable<string>;

	/**
	 * The SAML provider's signature algorithm URL.
	 */
	signatureMethodUrl?: Nullable<string>;

	/**
	 * The SAML provider's single sign-on URL.
	 */
	singleSignOnUrl?: Nullable<string>;
}

/**
 * Audit log entry for a `org.disable_two_factor_requirement` event.
 */
export type OrgDisableTwoFactorRequirementAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	MetaField<'OrgDisableTwoFactorRequirementAuditEntry'>;

/**
 * Audit log entry for a `org.enable_oauth_app_restrictions` event.
 */
export type OrgEnableOauthAppRestrictionsAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	MetaField<'OrgEnableOauthAppRestrictionsAuditEntry'>;

/**
 * Audit log entry for a `org.enable_saml` event.
 */
export interface OrgEnableSamlAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgEnableSamlAuditEntry'> {
	/**
	 * The SAML provider's digest algorithm URL.
	 */
	digestMethodUrl?: Nullable<string>;

	/**
	 * The SAML provider's issuer URL.
	 */
	issuerUrl?: Nullable<string>;

	/**
	 * The SAML provider's signature algorithm URL.
	 */
	signatureMethodUrl?: Nullable<string>;

	/**
	 * The SAML provider's single sign-on URL.
	 */
	singleSignOnUrl?: Nullable<string>;
}

/**
 * Audit log entry for a `org.enable_two_factor_requirement` event.
 */
export type OrgEnableTwoFactorRequirementAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	MetaField<'OrgEnableTwoFactorRequirementAuditEntry'>;

/**
 * Audit log entry for a `org.invite_member` event.
 */
export interface OrgInviteMemberAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgInviteMemberAuditEntry'> {
	/**
	 * The email address of the organization invitation.
	 */
	email?: Nullable<string>;

	/**
	 * The HTTP URL for the organization
	 */
	organizationUrl?: Nullable<string>;
}

/**
 * Audit log entry for a `org.invite_to_business` event.
 */
export type OrgInviteToBusinessAuditEntry = AuditEntry &
	EnterpriseAuditEntryData &
	Node &
	OrganizationAuditEntryData &
	MetaField<'OrgInviteToBusinessAuditEntry'>;

/**
 * Audit log entry for a `org.oauth_app_access_approved` event.
 */
export type OrgOauthAppAccessApprovedAuditEntry = AuditEntry &
	Node &
	OauthApplicationAuditEntryData &
	OrganizationAuditEntryData &
	MetaField<'OrgOauthAppAccessApprovedAuditEntry'>;

/**
 * Audit log entry for a `org.oauth_app_access_denied` event.
 */
export type OrgOauthAppAccessDeniedAuditEntry = AuditEntry &
	Node &
	OauthApplicationAuditEntryData &
	OrganizationAuditEntryData &
	MetaField<'OrgOauthAppAccessDeniedAuditEntry'>;

/**
 * Audit log entry for a `org.oauth_app_access_requested` event.
 */
export type OrgOauthAppAccessRequestedAuditEntry = AuditEntry &
	Node &
	OauthApplicationAuditEntryData &
	OrganizationAuditEntryData &
	MetaField<'OrgOauthAppAccessRequestedAuditEntry'>;

/**
 * Audit log entry for a `org.remove_billing_manager` event.
 */
export interface OrgRemoveBillingManagerAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgRemoveBillingManagerAuditEntry'> {
	/**
	 * The reason for the billing manager being removed.
	 */
	reason?: Nullable<OrgRemoveBillingManagerAuditEntryReason>;
}

/**
 * Audit log entry for a `org.remove_member` event.
 */
export interface OrgRemoveMemberAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgRemoveMemberAuditEntry'> {
	/**
	 * The types of membership the member has with the organization.
	 */
	membershipTypes?: Nullable<OrgRemoveMemberAuditEntryMembershipType[]>;

	/**
	 * The reason for the member being removed.
	 */
	reason?: Nullable<OrgRemoveMemberAuditEntryReason>;
}

/**
 * Audit log entry for a `org.remove_outside_collaborator` event.
 */
export interface OrgRemoveOutsideCollaboratorAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgRemoveOutsideCollaboratorAuditEntry'> {
	/**
	 * The typess of membership the outside collaborator has with the organization.
	 */
	membershipTypes?: Nullable<OrgRemoveOutsideCollaboratorAuditEntryMembershipType[]>;

	/**
	 * The reason for the outside collaborator being removed from the Organization.
	 */
	reason?: Nullable<OrgRemoveOutsideCollaboratorAuditEntryReason>;
}

/**
 * Audit log entry for a `org.restore_member` event.
 */
export interface OrgRestoreMemberAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgRestoreMemberAuditEntry'> {
	/**
	 * The number of custom email routings for the restored member.
	 */
	restoredCustomEmailRoutingsCount?: Nullable<number>;

	/**
	 * The number of issue assignments for the restored member.
	 */
	restoredIssueAssignmentsCount?: Nullable<number>;

	/**
	 * Restored organization membership objects.
	 */
	restoredMemberships?: Nullable<OrgRestoreMemberAuditEntryMembership[]>;

	/**
	 * The number of restored memberships.
	 */
	restoredMembershipsCount?: Nullable<number>;

	/**
	 * The number of repositories of the restored member.
	 */
	restoredRepositoriesCount?: Nullable<number>;

	/**
	 * The number of starred repositories for the restored member.
	 */
	restoredRepositoryStarsCount?: Nullable<number>;

	/**
	 * The number of watched repositories for the restored member.
	 */
	restoredRepositoryWatchesCount?: Nullable<number>;
}

/**
 * Metadata for an organization membership for `org.restore_member` actions.
 */
export type OrgRestoreMemberMembershipOrganizationAuditEntryData = OrganizationAuditEntryData &
	MetaField<'OrgRestoreMemberMembershipOrganizationAuditEntryData'>;
/**
 * Metadata for a repository membership for `org.restore_member` action.
 */
export type OrgRestoreMemberMembershipRepositoryAuditEntryData = RepositoryAuditEntryData &
	MetaField<'OrgRestoreMemberMembershipRepositoryAuditEntryData'>;

/**
 * Metadata for a team membership for `org.restore_member` actions.
 */
export type OrgRestoreMemberMembershipTeamAuditEntryData = TeamAuditEntryData &
	MetaField<'OrgRestoreMemberMembershipTeamAuditEntryData'>;

/**
 * Audit log entry for a `org.unblock_user`.
 */
export interface OrgUnblockUserAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgUnblockUserAuditEntry'> {
	/**
	 * The user being unblocked by the organization.
	 */
	blockedUser?: Nullable<User>;

	/**
	 * The username of the blocked user.
	 */
	blockedUserName?: Nullable<string>;

	/**
	 * The HTTP path for the blocked user.
	 */
	blockedUserResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for the blocked user.
	 */
	blockedUserUrl?: Nullable<string>;
}

/**
 * Audit log entry for a org.update_default_repository_permission.
 */
export interface OrgUpdateDefaultRepositoryPermissionAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgUpdateDefaultRepositoryPermissionAuditEntry'> {
	/**
	 * The new default repository permission level for the organization.
	 */
	permission?: Nullable<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;

	/**
	 * The former default repository permission level for the organization.
	 */
	permissionWas?: Nullable<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
}

/**
 * Audit log entry for a `org.update_member` event.
 */
export interface OrgUpdateMemberAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgUpdateMemberAuditEntry'> {
	/**
	 * The new member permission level for the organization.
	 */
	permission?: Nullable<OrgUpdateMemberAuditEntryPermission>;

	/**
	 * The former member permission level for the organization.
	 */
	permissionWas?: Nullable<OrgUpdateMemberAuditEntryPermission>;
}

/**
 * Audit log entry for a `org.update_member_repository_creation_permission` event.
 */
export interface OrgUpdateMemberRepositoryCreationPermissionAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgUpdateMemberRepositoryCreationPermissionAuditEntry'> {
	/**
	 * Can members create repositories in the organization.
	 */
	canCreateRepositories?: Nullable<boolean>;

	/**
	 * The permission for visibility level of repositories for this organization.
	 */
	visibility?: Nullable<OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>;
}

/**
 * Audit log entry for a `org.update_member_repository_invitation_permission` event.
 */
export interface OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		MetaField<'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry'> {
	/**
	 * Can outside collaborators be invited to repositories in the organization.
	 */
	canInviteOutsideCollaboratorsToRepositories?: Nullable<boolean>;
}

/**
 * Audit log entry for a `private_repository_forking.disable` event.
 */
export type PrivateRepositoryForkingDisableAuditEntry = AuditEntry &
	EnterpriseAuditEntryData &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'PrivateRepositoryForkingDisableAuditEntry'>;

/**
 * Audit log entry for a `private_repository_forking.enable` event.
 */
export type PrivateRepositoryForkingEnableAuditEntry = AuditEntry &
	EnterpriseAuditEntryData &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'PrivateRepositoryForkingEnableAuditEntry'>;

/**
 * Audit log entry for a `repo.access` event.
 */
export interface RepoAccessAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		RepositoryAuditEntryData,
		MetaField<'RepoAccessAuditEntry'> {
	/**
	 * The visibility of the repository
	 */
	visibility?: Nullable<RepoAccessAuditEntryVisibility>;
}

/**
 * Audit log entry for a `repo.add_member` event.
 */
export interface RepoAddMemberAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		RepositoryAuditEntryData,
		MetaField<'RepoAddMemberAuditEntry'> {
	/**
	 * The visibility of the repository
	 */
	visibility?: Nullable<RepoAddMemberAuditEntryVisibility>;
}

/**
 * Audit log entry for a `repo.add_topic` event.
 */
export type RepoAddTopicAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	TopicAuditEntryData &
	MetaField<'RepoAddTopicAuditEntry'>;

/**
 * Audit log entry for a `repo.archived` event.
 */
export interface RepoArchivedAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		RepositoryAuditEntryData,
		MetaField<'RepoArchivedAuditEntry'> {
	/**
	 * The visibility of the repository
	 */
	visibility?: Nullable<RepoArchivedAuditEntryVisibility>;
}

/**
 * Audit log entry for a `repo.change_merge_setting` event.
 */
export interface RepoChangeMergeSettingAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		RepositoryAuditEntryData,
		MetaField<'RepoChangeMergeSettingAuditEntry'> {
	/**
	 * Whether the change was to enable (true) or disable (false) the merge type
	 */
	isEnabled?: Nullable<boolean>;

	/**
	 * The merge method affected by the change
	 */
	mergeType?: Nullable<RepoChangeMergeSettingAuditEntryMergeType>;
}

/**
 * Audit log entry for a `repo.config.disable_anonymous_git_access` event.
 */
export type RepoConfigDisableAnonymousGitAccessAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigDisableAnonymousGitAccessAuditEntry'>;

/**
 * Audit log entry for a `repo.config.disable_collaborators_only` event.
 */
export type RepoConfigDisableCollaboratorsOnlyAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigDisableCollaboratorsOnlyAuditEntry'>;

/**
 * Audit log entry for a `repo.config.disable_contributors_only` event.
 */
export type RepoConfigDisableContributorsOnlyAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigDisableContributorsOnlyAuditEntry'>;

/**
 * Audit log entry for a `repo.config.disable_sockpuppet_disallowed` event.
 */
export type RepoConfigDisableSockpuppetDisallowedAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigDisableSockpuppetDisallowedAuditEntry'>;

/**
 * Audit log entry for a `repo.config.enable_anonymous_git_access` event.
 */
export type RepoConfigEnableAnonymousGitAccessAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigEnableAnonymousGitAccessAuditEntry'>;

/**
 * Audit log entry for a `repo.config.enable_collaborators_only` event.
 */
export type RepoConfigEnableCollaboratorsOnlyAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigEnableCollaboratorsOnlyAuditEntry'>;

/**
 * Audit log entry for a `repo.config.enable_contributors_only` event.
 */
export type RepoConfigEnableContributorsOnlyAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigEnableContributorsOnlyAuditEntry'>;

/**
 * Audit log entry for a `repo.config.enable_sockpuppet_disallowed` event.
 */
export type RepoConfigEnableSockpuppetDisallowedAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigEnableSockpuppetDisallowedAuditEntry'>;

/**
 * Audit log entry for a `repo.config.lock_anonymous_git_access` event.
 */
export type RepoConfigLockAnonymousGitAccessAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigLockAnonymousGitAccessAuditEntry'>;

/**
 * Audit log entry for a `repo.config.unlock_anonymous_git_access` event.
 */
export type RepoConfigUnlockAnonymousGitAccessAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	MetaField<'RepoConfigUnlockAnonymousGitAccessAuditEntry'>;

/**
 * Audit log entry for a `repo.create` event.
 */
export interface RepoCreateAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		RepositoryAuditEntryData,
		MetaField<'RepoCreateAuditEntry'> {
	/**
	 * The name of the parent repository for this forked repository.
	 */
	forkParentName?: Nullable<string>;

	/**
	 * The name of the root repository for this network.
	 */
	forkSourceName?: Nullable<string>;

	/**
	 * The visibility of the repository
	 */
	visibility?: Nullable<RepoCreateAuditEntryVisibility>;
}

/**
 * Audit log entry for a `repo.destroy` event.
 */
export interface RepoDestroyAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		RepositoryAuditEntryData,
		MetaField<'RepoDestroyAuditEntry'> {
	/**
	 * The visibility of the repository
	 */
	visibility?: Nullable<RepoDestroyAuditEntryVisibility>;
}

/**
 * Audit log entry for a `repo.remove_member` event.
 */
export interface RepoRemoveMemberAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		RepositoryAuditEntryData,
		MetaField<'RepoRemoveMemberAuditEntry'> {
	/**
	 * The visibility of the repository
	 */
	visibility?: Nullable<RepoRemoveMemberAuditEntryVisibility>;
}

/**
 * Audit log entry for a `repo.remove_topic` event.
 */
export type RepoRemoveTopicAuditEntry = AuditEntry &
	Node &
	OrganizationAuditEntryData &
	RepositoryAuditEntryData &
	TopicAuditEntryData &
	MetaField<'RepoRemoveTopicAuditEntry'>;

/**
 * Audit log entry for a `repository_visibility_change.disable` event.
 */
export type RepositoryVisibilityChangeDisableAuditEntry = AuditEntry &
	EnterpriseAuditEntryData &
	Node &
	OrganizationAuditEntryData &
	MetaField<'RepositoryVisibilityChangeDisableAuditEntry'>;

/**
 * Audit log entry for a `repository_visibility_change.enable` event.
 */
export type RepositoryVisibilityChangeEnableAuditEntry = AuditEntry &
	EnterpriseAuditEntryData &
	Node &
	OrganizationAuditEntryData &
	MetaField<'RepositoryVisibilityChangeEnableAuditEntry'>;

/**
 * Audit log entry for a `team.add_member` event.
 */
export interface TeamAddMemberAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		TeamAuditEntryData,
		MetaField<'TeamAddMemberAuditEntry'> {
	/**
	 * Whether the team was mapped to an LDAP Group.
	 */
	isLdapMapped?: Nullable<boolean>;
}

/**
 * Audit log entry for a `team.add_repository` event.
 */
export interface TeamAddRepositoryAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		RepositoryAuditEntryData,
		TeamAuditEntryData,
		MetaField<'TeamAddRepositoryAuditEntry'> {
	/**
	 * Whether the team was mapped to an LDAP Group.
	 */
	isLdapMapped?: Nullable<boolean>;
}

/**
 * Audit log entry for a `team.change_parent_team` event.
 */
export interface TeamChangeParentTeamAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		TeamAuditEntryData,
		MetaField<'TeamChangeParentTeamAuditEntry'> {
	/**
	 * Whether the team was mapped to an LDAP Group.
	 */
	isLdapMapped?: Nullable<boolean>;

	/**
	 * The new parent team.
	 */
	parentTeam?: Nullable<Team>;

	/**
	 * The name of the new parent team
	 */
	parentTeamName?: Nullable<string>;

	/**
	 * The name of the former parent team
	 */
	parentTeamNameWas?: Nullable<string>;

	/**
	 * The HTTP path for the parent team
	 */
	parentTeamResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for the parent team
	 */
	parentTeamUrl?: Nullable<string>;

	/**
	 * The former parent team.
	 */
	parentTeamWas?: Nullable<Team>;

	/**
	 * The HTTP path for the previous parent team
	 */
	parentTeamWasResourcePath?: Nullable<string>;

	/**
	 * The HTTP URL for the previous parent team
	 */
	parentTeamWasUrl?: Nullable<string>;
}

/**
 * Audit log entry for a `team.remove_member` event.
 */
export interface TeamRemoveMemberAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		TeamAuditEntryData,
		MetaField<'TeamRemoveMemberAuditEntry'> {
	/**
	 * Whether the team was mapped to an LDAP Group.
	 */
	isLdapMapped?: Nullable<boolean>;
}

/**
 * Audit log entry for a `team.remove_repository` event.
 */
export interface TeamRemoveRepositoryAuditEntry
	extends AuditEntry,
		Node,
		OrganizationAuditEntryData,
		RepositoryAuditEntryData,
		TeamAuditEntryData,
		MetaField<'TeamRemoveRepositoryAuditEntry'> {
	/**
	 * Whether the team was mapped to an LDAP Group.
	 */
	isLdapMapped?: Nullable<boolean>;
}
